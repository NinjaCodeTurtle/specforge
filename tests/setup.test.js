import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync, statSync, constants } from 'node:fs';
import { accessSync } from 'node:fs';
import { execSync } from 'node:child_process';
import { join } from 'node:path';

const ROOT = new URL('..', import.meta.url).pathname.replace(/\/$/, '');
const SETUP = join(ROOT, 'setup');

// ---------------------------------------------------------------------------
// Tests
// ---------------------------------------------------------------------------

describe('Setup script', () => {

  it('setup file exists', () => {
    assert.ok(existsSync(SETUP), `Expected ${SETUP} to exist`);
  });

  it('setup is a valid bash script (starts with #!/usr/bin/env bash)', () => {
    const content = readFileSync(SETUP, 'utf8');
    const firstLine = content.split('\n')[0].trim();
    assert.ok(
      firstLine.startsWith('#!/usr/bin/env bash') || firstLine.startsWith('#!/bin/bash'),
      `Expected shebang line, got: "${firstLine}"`,
    );
  });

  it('setup --help prints usage info', () => {
    const out = execSync(`bash ${SETUP} --help`, {
      encoding: 'utf8',
      timeout: 15_000,
      cwd: ROOT,
    }).trim();
    // Should contain some usage-related text
    const lower = out.toLowerCase();
    assert.ok(
      lower.includes('usage') || lower.includes('help') || lower.includes('specforge'),
      `Expected usage information in --help output, got: "${out.slice(0, 200)}"`,
    );
  });

  it('setup file is executable or can be made executable', () => {
    try {
      accessSync(SETUP, constants.X_OK);
      // Already executable — pass
    } catch {
      // Not executable yet — verify we can make it executable
      execSync(`chmod +x ${SETUP}`, { cwd: ROOT });
      accessSync(SETUP, constants.X_OK);
    }
  });
});
