import { deepMerge } from "./object";

describe('Object Utilities', () => {
  describe('deepMerge', () => {
    it('merges two simple objects', () => {

      const obj1 = {a: 1, b: 2};
      const obj2 = {b: 3, c: 4};

      const result = deepMerge(obj1, obj2);

      expect(result).toEqual({a: 1, b: 3, c: 4});
    });

    it('performs a deep merge with nested objects', () => {
      const obj1 = {a: 1, b: {c: 2, d: 3}};
      const obj2 = {b: {d: 4, e: 5}, f: 6};

      const result = deepMerge(obj1, obj2);

      expect(result).toEqual({a: 1, b: {c: 2, d: 4, e: 5}, f: 6});
    });

    it('handles arrays as atomic values', () => {
      const obj1 = {a: [1, 2], b: 2};
      const obj2 = {a: [3, 4], c: 3};

      const result = deepMerge(obj1, obj2);

      expect(result).toEqual({a: [3, 4], b: 2, c: 3});
    });

    it('merges objects with different types of values', () => {
      const obj1 = {a: 1, b: 'string', c: true, d: null};
      const obj2 = {b: 42, e: {nested: 'object'}};

      const result = deepMerge(obj1, obj2);

      expect(result).toEqual({a: 1, b: 42, c: true, d: null, e: {nested: 'object'}});
    });

    it('handles empty objects', () => {
      const obj1 = {};
      const obj2 = {a: 1};

      const result = deepMerge(obj1, obj2);

      expect(result).toEqual({a: 1});
    });

    it('returns the source object when target is not an object', () => {
      const obj1 = 'not an object' as any;
      const obj2 = {a: 1};

      const result = deepMerge(obj1, obj2);

      expect(result).toEqual({a: 1});
    });

    it('handles deep nesting with multiple levels', () => {

      const obj1 = {a: {b: {c: 1}}};
      const obj2 = {a: {b: {d: 2}, e: 3}};

      const result = deepMerge(obj1, obj2);

      expect(result).toEqual({a: {b: {c: 1, d: 2}, e: 3}});
    });
  });
});

