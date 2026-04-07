#!/usr/bin/env node

// SpecForge CLI
// Zero runtime dependencies -- Node.js >= 18 built-ins only

import { readFileSync, readdirSync, existsSync, cpSync, mkdirSync, writeFileSync } from 'node:fs';
import { join, dirname, resolve } from 'node:path';
import { createInterface } from 'node:readline';
import { homedir } from 'node:os';
import { fileURLToPath } from 'node:url';

// ---------------------------------------------------------------------------
// Paths
// ---------------------------------------------------------------------------

const __filename = fileURLToPath(import.meta.url);
const __dirname  = dirname(__filename);
const SKILLS_DIR = resolve(__dirname, '..', 'skills');
const PKG_PATH   = resolve(__dirname, '..', 'package.json');

// ---------------------------------------------------------------------------
// Version
// ---------------------------------------------------------------------------

function getVersion() {
  try {
    const pkg = JSON.parse(readFileSync(PKG_PATH, 'utf-8'));
    return pkg.version || '0.0.0';
  } catch {
    return '0.0.0';
  }
}

// ---------------------------------------------------------------------------
// ANSI helpers
// ---------------------------------------------------------------------------

const c = {
  reset:   '\x1b[0m',
  bold:    '\x1b[1m',
  dim:     '\x1b[2m',
  green:   '\x1b[32m',
  cyan:    '\x1b[36m',
  yellow:  '\x1b[33m',
  magenta: '\x1b[35m',
  red:     '\x1b[31m',
  blue:    '\x1b[34m',
  white:   '\x1b[37m',
};

function bold(s)    { return `${c.bold}${s}${c.reset}`; }
function green(s)   { return `${c.green}${s}${c.reset}`; }
function cyan(s)    { return `${c.cyan}${s}${c.reset}`; }
function yellow(s)  { return `${c.yellow}${s}${c.reset}`; }
function red(s)     { return `${c.red}${s}${c.reset}`; }
function dim(s)     { return `${c.dim}${s}${c.reset}`; }
function magenta(s) { return `${c.magenta}${s}${c.reset}`; }

// ---------------------------------------------------------------------------
// YAML frontmatter parser (simple, no dependencies)
// ---------------------------------------------------------------------------

function parseFrontmatter(content) {
  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) return { meta: {}, body: content };

  const raw = match[1];
  const meta = {};
  for (const line of raw.split('\n')) {
    const m = line.match(/^(\w[\w-]*):\s*(.+)$/);
    if (m) {
      let val = m[2].trim();
      // Strip surrounding quotes
      if ((val.startsWith('"') && val.endsWith('"')) ||
          (val.startsWith("'") && val.endsWith("'"))) {
        val = val.slice(1, -1);
      }
      // Boolean coercion
      if (val === 'true')  val = true;
      if (val === 'false') val = false;
      meta[m[1]] = val;
    }
  }

  const body = content.slice(match[0].length).replace(/^\r?\n/, '');
  return { meta, body };
}

// ---------------------------------------------------------------------------
// Skill discovery
// ---------------------------------------------------------------------------

function discoverSkills() {
  if (!existsSync(SKILLS_DIR)) return [];

  return readdirSync(SKILLS_DIR, { withFileTypes: true })
    .filter(d => d.isDirectory())
    .map(d => {
      const skillMd = join(SKILLS_DIR, d.name, 'SKILL.md');
      if (!existsSync(skillMd)) return null;
      const content = readFileSync(skillMd, 'utf-8');
      const { meta, body } = parseFrontmatter(content);
      return {
        dir:         d.name,
        name:        meta.name || d.name,
        description: meta.description || '',
        body,
        path:        join(SKILLS_DIR, d.name),
      };
    })
    .filter(Boolean);
}

// ---------------------------------------------------------------------------
// Readline prompt helper
// ---------------------------------------------------------------------------

function ask(rl, question) {
  return new Promise(resolve => rl.question(question, resolve));
}

async function promptChoice(rl, question, choices, defaultChoice) {
  const labels = choices.map(ch =>
    ch === defaultChoice ? bold(ch) : ch
  ).join(' / ');

  while (true) {
    const answer = (await ask(rl, `${question} [${labels}]: `)).trim().toLowerCase();
    if (!answer && defaultChoice) return defaultChoice;
    if (choices.includes(answer)) return answer;
    console.log(red(`  Invalid choice. Options: ${choices.join(', ')}`));
  }
}

// ---------------------------------------------------------------------------
// Installation logic
// ---------------------------------------------------------------------------

function installForClaudeCode(skills, targetDir) {
  const dest = join(targetDir, '.claude', 'skills', 'specforge');
  mkdirSync(dest, { recursive: true });

  const installed = [];
  for (const skill of skills) {
    const skillDest = join(dest, skill.dir);
    cpSync(skill.path, skillDest, { recursive: true });
    installed.push(skill.name);
  }
  return { dest, installed };
}

function installForCursor(skills, targetDir) {
  const dest = join(targetDir, '.cursor', 'rules');
  mkdirSync(dest, { recursive: true });

  const installed = [];
  for (const skill of skills) {
    const filename = `specforge-${skill.dir}.mdc`;
    const filePath = join(dest, filename);
    const frontmatter = [
      '---',
      `description: ${skill.description}`,
      'globs: ',
      'alwaysApply: false',
      '---',
      '',
    ].join('\n');
    writeFileSync(filePath, frontmatter + skill.body, 'utf-8');
    installed.push(filename);
  }
  return { dest, installed };
}

function installForCodex(skills, targetDir) {
  const dest = join(targetDir, '.codex', 'skills', 'specforge');
  mkdirSync(dest, { recursive: true });

  const installed = [];
  for (const skill of skills) {
    const skillDest = join(dest, skill.dir);
    cpSync(skill.path, skillDest, { recursive: true });
    installed.push(skill.name);
  }
  return { dest, installed };
}

function installTool(tool, skills, targetDir) {
  switch (tool) {
    case 'claude-code': return installForClaudeCode(skills, targetDir);
    case 'cursor':      return installForCursor(skills, targetDir);
    case 'codex':       return installForCodex(skills, targetDir);
    default:
      throw new Error(`Unknown tool: ${tool}`);
  }
}

// ---------------------------------------------------------------------------
// Pretty output
// ---------------------------------------------------------------------------

function printBanner() {
  console.log('');
  console.log(cyan(bold('  ╔═══════════════════════════════════════╗')));
  console.log(cyan(bold('  ║         SpecForge Framework           ║')));
  console.log(cyan(bold('  ╚═══════════════════════════════════════╝')));
  console.log('');
}

function printSuccess(results) {
  console.log('');
  console.log(green(bold('  ✔ Installation complete!')));
  console.log('');
  for (const r of results) {
    console.log(`  ${cyan(bold(r.tool))}`);
    console.log(`    ${dim('Location:')} ${r.dest}`);
    console.log(`    ${dim('Skills:')}   ${r.installed.length} installed`);
    for (const name of r.installed) {
      console.log(`      ${green('•')} ${name}`);
    }
    console.log('');
  }

  console.log(magenta(bold('  Getting Started')));
  console.log('');
  console.log(`  ${dim('Try these commands in your AI coding tool:')}`);
  console.log(`    ${cyan('/specforge:discover')}       ${dim('— Start with discovery & vision')}`);
  console.log(`    ${cyan('/specforge:generate-all')}   ${dim('— Run the full specification lifecycle')}`);
  console.log(`    ${cyan('/specforge:validate')}       ${dim('— Validate existing specifications')}`);
  console.log('');
  console.log(`  ${dim('Run')} ${cyan('specforge list')} ${dim('to see all available skills')}`);
  console.log(`  ${dim('Run')} ${cyan('specforge update')} ${dim('to refresh skills later')}`);
  console.log('');
}

// ---------------------------------------------------------------------------
// Commands
// ---------------------------------------------------------------------------

async function cmdInit(args) {
  printBanner();

  const allSkills = discoverSkills();
  if (allSkills.length === 0) {
    console.error(red('  Error: No skills found in ' + SKILLS_DIR));
    console.error(red('  Make sure the package is installed correctly.'));
    process.exit(1);
  }

  const TOOLS = ['claude-code', 'cursor', 'codex', 'all'];

  // Parse flags for non-interactive mode
  let tool     = args['--tool'] || null;
  let isGlobal = args['--global'] || false;
  let autoYes  = args['--yes'] || args['-y'] || false;
  let skillFilter = args['--skills'] || null;

  // Validate tool flag if provided
  if (tool && !TOOLS.includes(tool)) {
    console.error(red(`  Error: Unknown tool "${tool}". Options: ${TOOLS.join(', ')}`));
    process.exit(1);
  }

  // Interactive prompts (skip if --yes with defaults)
  if (!autoYes) {
    const rl = createInterface({ input: process.stdin, output: process.stdout });

    try {
      if (!tool) {
        tool = await promptChoice(rl,
          `  ${c.white}Which AI tool?${c.reset}`,
          TOOLS, 'claude-code');
      }

      if (!args['--global']) {
        const scope = await promptChoice(rl,
          `  ${c.white}Install scope?${c.reset}`,
          ['project', 'global'], 'project');
        isGlobal = scope === 'global';
      }

      if (!skillFilter) {
        const skillChoice = await promptChoice(rl,
          `  ${c.white}Which skills?${c.reset}`,
          ['all', 'select'], 'all');

        if (skillChoice === 'select') {
          console.log('');
          console.log(dim('  Available skills:'));
          allSkills.forEach((s, i) => {
            console.log(`    ${cyan((i + 1).toString().padStart(2))}. ${s.name} ${dim('- ' + s.description)}`);
          });
          console.log('');
          const indices = await ask(rl, `  Enter skill numbers (comma-separated): `);
          const selected = indices.split(',')
            .map(s => parseInt(s.trim(), 10) - 1)
            .filter(i => i >= 0 && i < allSkills.length);
          if (selected.length === 0) {
            console.error(red('  No valid skills selected. Aborting.'));
            process.exit(1);
          }
          skillFilter = selected.map(i => allSkills[i].dir).join(',');
        }
      }

      rl.close();
    } catch (err) {
      rl.close();
      // Handle Ctrl+C / closed input gracefully
      if (err.code === 'ERR_USE_AFTER_CLOSE') {
        console.log('\n  Cancelled.');
        process.exit(0);
      }
      throw err;
    }
  }

  // Apply defaults for --yes mode
  if (!tool) tool = 'claude-code';

  // Determine skills to install
  let skills = allSkills;
  if (skillFilter) {
    const names = skillFilter.split(',').map(s => s.trim());
    skills = allSkills.filter(s => names.includes(s.dir) || names.includes(s.name));
    if (skills.length === 0) {
      console.error(red('  Error: No matching skills found for: ' + skillFilter));
      console.error(dim('  Available: ' + allSkills.map(s => s.dir).join(', ')));
      process.exit(1);
    }
  }

  // Determine target directory
  const targetDir = isGlobal ? homedir() : process.cwd();

  // Determine which tools to install
  const tools = tool === 'all' ? ['claude-code', 'cursor', 'codex'] : [tool];

  console.log('');
  console.log(dim(`  Installing ${skills.length} skills for ${tools.join(', ')}...`));

  const results = [];
  for (const t of tools) {
    try {
      const result = installTool(t, skills, targetDir);
      results.push({ tool: t, ...result });
    } catch (err) {
      console.error(red(`  Error installing for ${t}: ${err.message}`));
      process.exit(1);
    }
  }

  printSuccess(results);
}

async function cmdUpdate(args) {
  printBanner();

  const allSkills = discoverSkills();
  if (allSkills.length === 0) {
    console.error(red('  Error: No skills found in ' + SKILLS_DIR));
    process.exit(1);
  }

  // Detect existing installations
  const cwd  = process.cwd();
  const home = homedir();

  const locations = [
    { tool: 'claude-code', path: join(cwd, '.claude', 'skills', 'specforge'),  scope: 'project' },
    { tool: 'claude-code', path: join(home, '.claude', 'skills', 'specforge'), scope: 'global'  },
    { tool: 'cursor',      path: join(cwd, '.cursor', 'rules'),               scope: 'project' },
    { tool: 'cursor',      path: join(home, '.cursor', 'rules'),              scope: 'global'  },
    { tool: 'codex',       path: join(cwd, '.codex', 'skills', 'specforge'),   scope: 'project' },
    { tool: 'codex',       path: join(home, '.codex', 'skills', 'specforge'),  scope: 'global'  },
  ];

  const found = locations.filter(loc => {
    if (loc.tool === 'cursor') {
      // Check for any specforge-*.mdc files
      if (!existsSync(loc.path)) return false;
      return readdirSync(loc.path).some(f => f.startsWith('specforge-') && f.endsWith('.mdc'));
    }
    return existsSync(loc.path);
  });

  if (found.length === 0) {
    console.log(yellow('  No existing installation found.'));
    console.log(dim(`  Run ${cyan('specforge init')} to install.`));
    console.log('');
    process.exit(0);
  }

  console.log(dim(`  Found ${found.length} installation(s). Updating...`));
  console.log('');

  const results = [];
  for (const loc of found) {
    const targetDir = loc.scope === 'global' ? home : cwd;
    try {
      const result = installTool(loc.tool, allSkills, targetDir);
      results.push({ tool: `${loc.tool} (${loc.scope})`, ...result });
    } catch (err) {
      console.error(red(`  Error updating ${loc.tool} (${loc.scope}): ${err.message}`));
    }
  }

  if (results.length > 0) {
    console.log(green(bold('  ✔ Update complete!')));
    console.log('');
    for (const r of results) {
      console.log(`  ${cyan(bold(r.tool))}`);
      console.log(`    ${dim('Location:')} ${r.dest}`);
      console.log(`    ${dim('Skills:')}   ${r.installed.length} updated`);
    }
    console.log('');
  }
}

function cmdList() {
  const skills = discoverSkills();
  if (skills.length === 0) {
    console.error(red('No skills found in ' + SKILLS_DIR));
    process.exit(1);
  }

  console.log('');
  console.log(bold('  Available SpecForge Skills'));
  console.log(dim('  ─────────────────────────────────────────────────────────────────'));
  console.log('');

  // Calculate column widths
  const nameWidth = Math.max(12, ...skills.map(s => s.name.length));

  for (const skill of skills) {
    const name = skill.name.padEnd(nameWidth);
    console.log(`  ${cyan(name)}  ${skill.description}`);
  }

  console.log('');
  console.log(dim(`  ${skills.length} skills available`));
  console.log(dim(`  Run ${cyan('specforge init')} to install`));
  console.log('');
}

function cmdHelp() {
  const version = getVersion();
  console.log(`
${bold('specforge')} ${dim('v' + version)}
${dim('Comprehensive framework for crafting production-ready software specifications')}

${bold('Usage:')}
  specforge <command> [options]

${bold('Commands:')}
  ${cyan('init')}     Interactive installer — set up SpecForge skills for your project
  ${cyan('update')}   Update an existing installation with latest skills
  ${cyan('list')}     List all available skills

${bold('Init options:')}
  --tool <name>     AI tool: claude-code, cursor, codex, all
  --global          Install to user-level directory (~/)
  --skills <list>   Comma-separated skill directory names
  --yes, -y         Accept all defaults (non-interactive)

${bold('General:')}
  --help, -h        Show this help message
  --version, -v     Show version number

${bold('Examples:')}
  ${dim('$')} npx specforge init
  ${dim('$')} npx specforge init --tool claude-code --yes
  ${dim('$')} npx specforge init --tool all --global
  ${dim('$')} npx specforge init --skills discover,define-requirements
  ${dim('$')} npx specforge list
  ${dim('$')} npx specforge update
`);
}

// ---------------------------------------------------------------------------
// Argument parser
// ---------------------------------------------------------------------------

function parseArgs(argv) {
  const args = {};
  const positional = [];

  let i = 0;
  while (i < argv.length) {
    const arg = argv[i];
    if (arg === '--tool' || arg === '--skills') {
      args[arg] = argv[++i] || '';
    } else if (arg === '--global') {
      args['--global'] = true;
    } else if (arg === '--yes' || arg === '-y') {
      args['--yes'] = true;
    } else if (arg === '--help' || arg === '-h') {
      args['--help'] = true;
    } else if (arg === '--version' || arg === '-v') {
      args['--version'] = true;
    } else if (arg.startsWith('-')) {
      // Unknown flag -- ignore
      console.warn(yellow(`  Warning: Unknown flag "${arg}"`));
    } else {
      positional.push(arg);
    }
    i++;
  }

  args._positional = positional;
  return args;
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const command = args._positional[0] || '';

  if (args['--version']) {
    console.log(getVersion());
    return;
  }

  if (args['--help'] || (!command && !args['--version'])) {
    cmdHelp();
    return;
  }

  switch (command) {
    case 'init':
      await cmdInit(args);
      break;
    case 'update':
      await cmdUpdate(args);
      break;
    case 'list':
      cmdList();
      break;
    default:
      console.error(red(`  Unknown command: "${command}"`));
      console.error(dim(`  Run ${cyan('specforge --help')} for usage.`));
      process.exit(1);
  }
}

main().catch(err => {
  console.error(red(`  Error: ${err.message}`));
  process.exit(1);
});
