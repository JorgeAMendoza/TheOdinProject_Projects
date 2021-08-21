/* eslint-disable no-undef */

import { expect } from '@jest/globals';
import ship from '../../app/ship/ship';

test('Test 1: Non-Hit spot returns false', () => {
  const testShip = ship('Mary', 4);
  expect(testShip.isHit(0)).toBe(false);
});
test('Test 2: Hit area returns true', () => {
  const testShip = ship('Going', 4);
  testShip.hit(0);
  expect(testShip.isHit(0)).toBe(true);
});
