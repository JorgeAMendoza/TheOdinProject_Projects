import { expect } from '@jest/globals';
import gameboard from '../../app/gameboard/gameboard';
/* eslint-disable no-undef */

test('Test 1: All ships not sunk, returns false', () => {
  const testBoard = gameboard();
  expect(testBoard.allSunk([false, false, false, false])).toBe(false);
});

test('Test 2: All ships are sunk, returns true', () => {
  const testBoard = gameboard();
  expect(testBoard.allSunk([true, true, true, true])).toBe(true);
});

test('Test 3: one ship is sunk, but still returns false', () => {
  const testBoard = gameboard();
  expect(testBoard.allSunk([true, false, true, true])).toBe(false);
});
