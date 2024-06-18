import { isValidColorFormat, isValidSizeFormat } from './guards';

describe('isValidColorFormat', () => {
  it('should return true for valid hex color', () => {
    const result = isValidColorFormat('#ff00ff');
    expect(result).toBe(true);
  });

  it('should return true for valid shorthand hex color', () => {
    const result = isValidColorFormat('#f0f');
    expect(result).toBe(true);
  });

  it('should return true for valid rgb color', () => {
    const result = isValidColorFormat('rgb(255,0,255)');
    expect(result).toBe(true);
  });

  it('should return true for valid rgb color with spaces', () => {
    const result = isValidColorFormat('rgb(255, 0, 255)');
    expect(result).toBe(true);
  });

  it('should return true for valid rgba color', () => {
    const result = isValidColorFormat('rgba(255,0,255,0.5)');
    expect(result).toBe(true);
  });

  it('should return true for valid rgba color with spaces', () => {
    const result = isValidColorFormat('rgba(255, 0, 255, 0.5)');
    expect(result).toBe(true);
  });

  it('should return false for invalid hex color', () => {
    const result = isValidColorFormat('#ff00fz');
    expect(result).toBe(false);
  });

  it('should return false for invalid rgb color', () => {
    const result = isValidColorFormat('rgb(256,0,255)');
    expect(result).toBe(false);
  });

  it('should return false for invalid rgba color', () => {
    const result = isValidColorFormat('rgba(256,0,255,0.5)');
    expect(result).toBe(false);
  });

  it('should return false for other strings', () => {
    const result = isValidColorFormat('invalid-color');
    expect(result).toBe(false);
  });
});

describe('isValidSizeFormat', () => {
  it('should return true for valid px size', () => {
    const result = isValidSizeFormat('12px');
    expect(result).toBe(true);
  });

  it('should return true for valid rem size', () => {
    const result = isValidSizeFormat('1.5rem');
    expect(result).toBe(true);
  });

  it('should return true for valid em size', () => {
    const result = isValidSizeFormat('2em');
    expect(result).toBe(true);
  });

  it('should return true for valid percent size', () => {
    const result = isValidSizeFormat('50%');
    expect(result).toBe(true);
  });

  it('should return true for valid negative px size', () => {
    const result = isValidSizeFormat('-12px');
    expect(result).toBe(true);
  });

  it('should return true for valid decimal px size', () => {
    const result = isValidSizeFormat('0.5px');
    expect(result).toBe(true);
  });

  it('should return true for valid negative percent size', () => {
    const result = isValidSizeFormat('-50%');
    expect(result).toBe(true);
  });

  it('should return true for valid decimal percent size', () => {
    const result = isValidSizeFormat('50.5%');
    expect(result).toBe(true);
  });

  it('should return false for invalid px size', () => {
    const result = isValidSizeFormat('12pxes');
    expect(result).toBe(false);
  });

  it('should return false for invalid rem size', () => {
    const result = isValidSizeFormat('1.5remm');
    expect(result).toBe(false);
  });

  it('should return false for invalid em size', () => {
    const result = isValidSizeFormat('2ems');
    expect(result).toBe(false);
  });

  it('should return false for invalid percent size', () => {
    const result = isValidSizeFormat('50percent');
    expect(result).toBe(false);
  });

  it('should return false for non-size string', () => {
    const result = isValidSizeFormat('not-a-size');
    expect(result).toBe(false);
  });

  it('should return false for empty string', () => {
    const result = isValidSizeFormat('');
    expect(result).toBe(false);
  });
});
