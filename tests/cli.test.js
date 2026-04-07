import { describe, it, before, after } from 'node:test';
import assert from 'node:assert/strict';
import { execSync } from 'node:child_process';
import { existsSync, mkdirSync, rmSync, readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { randomUUID } from 'node:crypto';

const ROOT = new URL('..', import.meta.url).pathname.replace(/\/$/, '');
const CLI = join(ROOT, 'bin', 'cli.js');

const SKILLS = [
  'discover',
  'analyze-market',
  'define-requirements',
  'design-ux',
  'design-architecture',
  'plan-implementation',
  'validate',
  'generate-all',
];

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function run(args, opts = {}) {
  const cmd = `node ${CLI} ${args}`;
  return execSync(cmd, {
    encoding: 'utf8',
    timeout: 30_000,
    cwd: opts.cwd ?? ROOT,
    env: { ...process.env, ...opts.env },
  }).trim();
}

function runMayFail(args, opts = {}) {
  try {
    const stdout = run(args, opts);
    return { stdout, exitCode: 0 };
  } catch (err) {
    return {
      stdout: (err.stdout ?? '').toString().trim(),
      stderr: (err.stderr ?? '').toString().trim(),
      exitCode: err.status ?? 1,
    };
  }
}

function makeTempDir() {
  const dir = join(tmpdir(), `specforge-test-${randomUUID()}`);
  mkdirSync(dir, { recursive: true });
  return dir;
}

// ---------------------------------------------------------------------------
// Tests
// ---------------------------------------------------------------------------

describe('CLI — bin/cli.js', () => {

  it('bin/cli.js exists', () => {
    assert.ok(existsSync(CLI), `Expected ${CLI} to exist`);
  });

  it('bin/cli.js is valid JavaScript', () => {
    // Syntax-check only — node --check exits 0 if syntax is valid
    execSync(`node --check ${CLI}`, { encoding: 'utf8' });
  });

  it('--help prints usage info', () => {
    const out = run('--help');
    for (const token of ['Usage', 'specforge', 'init', 'list']) {
      assert.ok(out.includes(token), `--help output should contain "${token}"`);
    }
  });

  it('--version prints semver string', () => {
    const out = run('--version');
    assert.match(out, /\d+\.\d+\.\d+/, 'Expected semver version string');
  });

  it('list outputs all 8 skills', () => {
    const out = run('list');
    for (const skill of SKILLS) {
      assert.ok(out.includes(skill), `list output should contain "${skill}"`);
    }
  });

  // ---- init --tool claude-code ----
  describe('init --tool claude-code --yes', () => {
    let tmp;

    before(() => {
      tmp = makeTempDir();
      run('init --tool claude-code --yes', { cwd: tmp });
    });

    after(() => {
      rmSync(tmp, { recursive: true, force: true });
    });

    it('creates .claude/skills/specforge/ with skill directories', () => {
      const base = join(tmp, '.claude', 'skills', 'specforge');
      assert.ok(existsSync(base), `Expected ${base} to exist`);
      for (const skill of SKILLS) {
        assert.ok(
          existsSync(join(base, skill)),
          `Expected skill directory "${skill}" inside ${base}`,
        );
      }
    });
  });

  // ---- init --tool cursor ----
  describe('init --tool cursor --yes', () => {
    let tmp;

    before(() => {
      tmp = makeTempDir();
      run('init --tool cursor --yes', { cwd: tmp });
    });

    after(() => {
      rmSync(tmp, { recursive: true, force: true });
    });

    it('creates .cursor/rules/ with .mdc files', () => {
      const rulesDir = join(tmp, '.cursor', 'rules');
      assert.ok(existsSync(rulesDir), `Expected ${rulesDir} to exist`);
      const mdcFiles = readdirSync(rulesDir).filter((f) => f.endsWith('.mdc'));
      assert.ok(mdcFiles.length > 0, 'Expected at least one .mdc file');
    });
  });

  // ---- init --tool codex ----
  describe('init --tool codex --yes', () => {
    let tmp;

    before(() => {
      tmp = makeTempDir();
      run('init --tool codex --yes', { cwd: tmp });
    });

    after(() => {
      rmSync(tmp, { recursive: true, force: true });
    });

    it('creates .codex/skills/specforge/ with skill directories', () => {
      const base = join(tmp, '.codex', 'skills', 'specforge');
      assert.ok(existsSync(base), `Expected ${base} to exist`);
      for (const skill of SKILLS) {
        assert.ok(
          existsSync(join(base, skill)),
          `Expected skill directory "${skill}" inside ${base}`,
        );
      }
    });
  });

  // ---- unknown command ----
  it('unknown command fails with non-zero exit', () => {
    const result = runMayFail('this-command-does-not-exist');
    assert.notEqual(result.exitCode, 0, 'Expected non-zero exit code for unknown command');
  });
});
