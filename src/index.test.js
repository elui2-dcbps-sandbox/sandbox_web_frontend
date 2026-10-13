import { describe, expect, it } from 'vitest';
import { titleFromXml } from './index.js';

describe('synthetic title preview', () => {
  it('reads a title', () => {
    expect(titleFromXml('<page><title>Sandbox</title></page>')).toBe('Sandbox');
  });

  it('returns an empty string when no title exists', () => {
    expect(titleFromXml('<page/>')).toBe('');
  });
});
