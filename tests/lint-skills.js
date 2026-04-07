import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, basename } from 'node:path';

const ROOT = new URL('..', import.meta.url).pathname.replace(/\/$/, '');
const SKILLS_DIR = join(ROOT, 'skills');

// ---------------------------------------------------------------------------
// ANSI helpers
// ---------------------------------------------------------------------------

const GREEN = '\x1b[32m';
const RED = '\x1b[31m';
const BOLD = '\x1b[1m';
const RESET = '\x1b[0m';

function pass(msg) {
  console.log(`  ${GREEN}PASS${RESET}  ${msg}`);
}

function fail(msg) {
  console.log(`  ${RED}FAIL${RESET}  ${msg}`);
}

// ---------------------------------------------------------------------------
// Minimal frontmatter parser
// ---------------------------------------------------------------------------

function parseFrontmatter(content) {
  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) return null;

  const rawYaml = match[1];
  const body = match[2];
  const attrs = {};

  for (const line of rawYaml.split('\n')) {
    const kv = line.match(/^(\w[\w-]*):\s*"?([^"]*)"?\s*$/);
    if (kv) {
      attrs[kv[1]] = kv[2].trim();
    }
  }

  return { attrs, body };
}

// ---------------------------------------------------------------------------
// Lint checks
// ---------------------------------------------------------------------------

let failures = 0;

function check(condition, msg) {
  if (condition) {
    pass(msg);
  } else {
    fail(msg);
    failures++;
  }
}

console.log(`\n${BOLD}Linting SKILL.md files in ${SKILLS_DIR}${RESET}\n`);

// Discover skill directories
const dirs = readdirSync(SKILLS_DIR).filter((d) => {
  return statSync(join(SKILLS_DIR, d)).isDirectory();
});

const REQUIRED_FIELDS = ['name', 'description', 'role'];
const KEBAB_RE = /^[a-z][a-z0-9]*(-[a-z0-9]+)*$/;

const seenNames = new Set();
let totalSkills = 0;

for (const dir of dirs) {
  const skillFile = join(SKILLS_DIR, dir, 'SKILL.md');
  const label = `skills/${dir}/SKILL.md`;

  console.log(`\n${BOLD}${label}${RESET}`);

  // Check directory name is kebab-case
  check(KEBAB_RE.test(dir), `Directory name "${dir}" is kebab-case`);

  // Read file
  let content;
  try {
    content = readFileSync(skillFile, 'utf8');
  } catch {
    fail(`${label} — file not found or unreadable`);
    failures++;
    continue;
  }

  // Check non-empty
  check(content.trim().length > 0, `${label} is not empty`);

  // Parse frontmatter
  const fm = parseFrontmatter(content);
  check(fm !== null, `${label} has valid YAML frontmatter`);

  if (!fm) continue;

  // Required fields
  for (const field of REQUIRED_FIELDS) {
    check(
      fm.attrs[field] && fm.attrs[field].length > 0,
      `${label} has required field "${field}"`,
    );
  }

  // Duplicate name check
  if (fm.attrs.name) {
    check(!seenNames.has(fm.attrs.name), `Skill name "${fm.attrs.name}" is unique (no duplicates)`);
    seenNames.add(fm.attrs.name);
  }

  totalSkills++;
}

// ---------------------------------------------------------------------------
// Summary
// ---------------------------------------------------------------------------

console.log(`\n${BOLD}---${RESET}`);
console.log(`Skills checked: ${totalSkills}`);

if (failures === 0) {
  console.log(`${GREEN}${BOLD}All checks passed.${RESET}\n`);
  process.exit(0);
} else {
  console.log(`${RED}${BOLD}${failures} check(s) failed.${RESET}\n`);
  process.exit(1);
}
