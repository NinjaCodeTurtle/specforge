import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = new URL('..', import.meta.url).pathname.replace(/\/$/, '');
const SKILLS_DIR = join(ROOT, 'skills');

const EXPECTED_SKILLS = [
  { dir: 'discover',             name: 'specforge:discover' },
  { dir: 'analyze-market',       name: 'specforge:analyze-market' },
  { dir: 'define-requirements',  name: 'specforge:define-requirements' },
  { dir: 'design-ux',            name: 'specforge:design-ux' },
  { dir: 'design-architecture',  name: 'specforge:design-architecture' },
  { dir: 'plan-implementation',  name: 'specforge:plan-implementation' },
  { dir: 'validate',             name: 'specforge:validate' },
  { dir: 'generate-all',         name: 'specforge:generate-all' },
];

/**
 * Minimal YAML frontmatter parser.
 * Returns { attrs: {}, body: string } or null if no frontmatter found.
 */
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
// Tests
// ---------------------------------------------------------------------------

describe('Skills — SKILL.md validation', () => {

  for (const { dir, name } of EXPECTED_SKILLS) {
    const skillDir = join(SKILLS_DIR, dir);
    const skillFile = join(skillDir, 'SKILL.md');

    describe(`skills/${dir}`, () => {

      it('skill directory exists', () => {
        assert.ok(existsSync(skillDir), `Expected directory ${skillDir} to exist`);
      });

      it('has a SKILL.md file', () => {
        assert.ok(existsSync(skillFile), `Expected ${skillFile} to exist`);
      });

      it('SKILL.md has valid YAML frontmatter with name and description', () => {
        const content = readFileSync(skillFile, 'utf8');
        const fm = parseFrontmatter(content);
        assert.ok(fm, 'SKILL.md must have YAML frontmatter delimited by ---');
        assert.ok(fm.attrs.name, 'Frontmatter must have a "name" field');
        assert.ok(fm.attrs.description, 'Frontmatter must have a "description" field');
      });

      it(`SKILL.md name matches "${name}"`, () => {
        const content = readFileSync(skillFile, 'utf8');
        const fm = parseFrontmatter(content);
        assert.ok(fm, 'Frontmatter must exist');
        assert.equal(fm.attrs.name, name);
      });

      it('SKILL.md has non-empty body content', () => {
        const content = readFileSync(skillFile, 'utf8');
        const fm = parseFrontmatter(content);
        assert.ok(fm, 'Frontmatter must exist');
        assert.ok(fm.body.trim().length > 0, 'Body content must not be empty');
      });

      it('SKILL.md has no common formatting errors', () => {
        const content = readFileSync(skillFile, 'utf8');

        // Must start with ---
        assert.ok(content.startsWith('---'), 'File must start with ---');

        // Must have a closing ---
        const secondDash = content.indexOf('---', 3);
        assert.ok(secondDash > 3, 'File must have a closing --- for frontmatter');

        // Frontmatter between the dashes must not be empty
        const between = content.slice(4, secondDash).trim();
        assert.ok(between.length > 0, 'Frontmatter must not be empty between --- delimiters');
      });
    });
  }
});
