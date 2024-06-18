import { createArray, createMapArray } from './array';

describe('Array Utilities', () => {
  describe('createMapArray', () => {
    it('creates an array of specified length with mapped values', () => {
      // Arrange
      const length = 5;
      const mapFn = (index: number) => index * 2;

      // Act
      const result = createMapArray(length, mapFn);

      // Assert
      expect(result).toEqual([0, 2, 4, 6, 8]);
    });

    it('returns an empty array when length is 0', () => {
      // Arrange
      const length = 0;
      const mapFn = (index: number) => index * 2;

      // Act
      const result = createMapArray(length, mapFn);

      // Assert
      expect(result).toEqual([]);
    });

    it('handles mapping function returning non-number types', () => {
      // Arrange
      const length = 3;
      const mapFn = (index: number) => `Item ${index}`;

      // Act
      const result = createMapArray<string>(length, mapFn);

      // Assert
      expect(result).toEqual(['Item 0', 'Item 1', 'Item 2']);
    });

    it('handles mapping function with complex objects', () => {
      // Arrange
      const length = 3;
      const mapFn = (index: number) => ({ value: index });

      // Act
      const result = createMapArray<{ value: number }>(length, mapFn);

      // Assert
      expect(result).toEqual([{ value: 0 }, { value: 1 }, { value: 2 }]);
    });
  });

  describe('createArray', () => {
    it('creates an array of specified length with default values', () => {
      // Arrange
      const length = 5;

      // Act
      const result = createArray(length);

      // Assert
      expect(result).toEqual([0, 1, 2, 3, 4]);
    });

    it('creates an array of specified length starting from a given startIndex', () => {
      // Arrange
      const length = 5;
      const startIndex = 10;

      // Act
      const result = createArray(length, startIndex);

      // Assert
      expect(result).toEqual([10, 11, 12, 13, 14]);
    });

    it('creates an array of specified length with mapped values and different startIndex', () => {
      // Arrange
      const length = 5;
      const startIndex = 5;
      const mapFn = (index: number) => index * 2;

      // Act
      const result = createArray(length, startIndex, mapFn);

      // Assert
      expect(result).toEqual([10, 12, 14, 16, 18]);
    });

    it('handles mapping function returning non-number types', () => {
      // Arrange
      const length = 3;
      const startIndex = 0;
      const mapFn = (index: number) => `Item ${index}`;

      // Act
      const result = createArray<string>(length, startIndex, mapFn);

      // Assert
      expect(result).toEqual(['Item 0', 'Item 1', 'Item 2']);
    });

    it('handles mapping function with complex objects with given startIndex', () => {
      // Arrange
      const length = 3;
      const startIndex = 5;
      const mapFn = (index: number) => ({ value: index });

      // Act
      const result = createArray<{ value: number }>(length, startIndex, mapFn);

      // Assert
      expect(result).toEqual([{ value: 5 }, { value: 6 }, { value: 7 }]);
    });
  });
});
