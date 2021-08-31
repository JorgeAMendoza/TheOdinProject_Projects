import { describe, expect, it } from '@jest/globals';
import ship from '../app/ship/ship';

describe('Testing Ship Module', () => {
  const testShip = ship('Carrier', 5);

  it('Test 1: Initalizing ship should return a ship status of all points as false', () => {
    expect(testShip.getShipStatus()).toStrictEqual([
      false,
      false,
      false,
      false,
      false,
    ]);
  });

  it('Test 1: Hitting an empty space should show the index as true', () => {
    testShip.hit(0);
    expect(testShip.getShipStatus()).toStrictEqual([
      true,
      false,
      false,
      false,
      false,
    ]);
  });

  it('Test 3: Hitting a taken space should not effect the ship data points at all', () => {
    testShip.hit(0);
    expect(testShip.getShipStatus()).toStrictEqual([
      true,
      false,
      false,
      false,
      false,
    ]);
  });

  it('Test 4: isSunk should return false if not all points have been hit', () => {
    expect(testShip.isSunk()).toBe(false);
  });

  it('Test 5: Return the correct ship length', () => {
    expect(testShip.getLength()).toBe(5);
  });

  it('Test 6: Returns true if all points are hit', () => {
    testShip.hit(1);
    testShip.hit(2);
    testShip.hit(3);
    testShip.hit(4);
    expect(testShip.isSunk()).toBe(true);
  });
});
