import { expect, describe } from '@jest/globals';
import gameboard from '../app/gameboard/gameboard';
import ship from '../app/ship/ship';

describe('Testing game board module', () => {
  const testGameBoard = gameboard();
  const testShipOne = ship('Carrier', 5);
  const testShipTwo = ship('Battleship', 4);

  test('Test 1: Out of bounds placement returns false on x direction', () => {
    expect(testGameBoard.placeShip(testShipOne, 7, 0, 'x')).toBe(false);
  });

  test('Test 2: Out of bounds placement returns false on y axis', () => {
    expect(testGameBoard.placeShip(testShipOne, 0, 7, 'y')).toBe(false);
  });

  test('Test 3: in bounds placement returns true on x axis', () => {
    expect(testGameBoard.placeShip(testShipOne, 2, 4, 'x')).toBe(true);
  });

  test('Test 4: in bounds placement returns true on y axis', () => {
    expect(testGameBoard.placeShip(testShipTwo, 0, 0, 'y')).toBe(true);
  });

  test('Test 5: Placing a ship in a taken spot should return false on x axis', () => {
    expect(testGameBoard.placeShip(testShipTwo, 2, 3)).toBe(false);
  });

  test('Test 6: Placing a ship in a taken spot should return false on the y axis', () => {
    expect(testGameBoard.placeShip(testShipOne, 0, 2)).toBe(false);
  });

  test('Test 5: Sending a unsucessful attack should return false', () => {
    expect(testGameBoard.receiveAttack(1, 1)).toBe(false);
  });

  test('Test 6: Sending a succesfull attack should return true', () => {
    expect(testGameBoard.receiveAttack(0, 0)).toBe(true);
  });

  test('Test 7: Hitting an already hit spot returns false', () => {
    expect(testGameBoard.receiveAttack(0, 0)).toBe(false);
  });

  // test('Test 6: If all ships sunk, it should return true', () => {
  //   expect(testGameBoard.allShipsSunk()).toBe(true);
  // });
});
