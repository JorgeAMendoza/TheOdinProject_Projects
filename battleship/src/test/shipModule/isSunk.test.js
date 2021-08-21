/* eslint-disable no-undef */

import { expect } from '@jest/globals';
import ship from '../../app/ship/ship';

test('Test 1: All points are hit and returns true', () => {
  const testShip = ship('Racket', 4);
  testShip.hit(0);
  testShip.hit(1);
  testShip.hit(2);
  testShip.hit(3);
  expect(testShip.isSunk()).toBe(true);
});

test('Test 2: No points hit on ship and returns false', () => {
  const testShip = ship('Mary', 4);
  expect(testShip.isSunk()).toBe(false);
});

test('Test 3: One point hit, returns false', () => {
  const testShip = ship('Canti', 4);
  testShip.hit(2);
  expect(testShip.isSunk()).toBe(false);
});
