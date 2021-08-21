import { describe, expect } from '@jest/globals';
import ship from '../app/ship/ship';

describe('Testing Ship Module', () => {
  const testShip = ship('Carrier', 5);

  test('Test 1: Hitting an empty space should return no error, returns true', () => {
    expect(testShip.hit(0)).toBe(true);
  });

  test('Test 2: Hitting a taken space should return an error, so returns false', () => {
    expect(testShip.hit(0)).toBe(false);
  });

  test('Test 3: Should return false if not all spots on ship are hit', () => {
    expect(testShip.isSunk()).toBe(false);
  });

  test('Test 4: Returns true if all points are hit', () => {
    testShip.hit(1);
    testShip.hit(2);
    testShip.hit(3);
    testShip.hit(4);
    expect(testShip.isSunk()).toBe(true);
  });
});
