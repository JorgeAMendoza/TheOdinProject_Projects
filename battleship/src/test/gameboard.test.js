import { expect, describe } from '@jest/globals';
import gameboard from '../app/gameboard/gameboard';
import ship from '../app/ship/ship';

describe('Testing game board module', () => {
  const testGameBoard = gameboard();
  const testShipOne = ('Carrier', 5);
  const testShipTwo = ('Battleship', 4);

  test('Test 2: Change direction of the placement of the ship', () => {
    testGameBoard.changePlacementDirection();
    expect(testGameBoard.getPlacementDirection()).toBe('y');
  });

  // test('Test 2: Placing a ship regularly should return true', () => {
  //   expect(testGameBoard.placeShip(testShipOne, 1, 1)).toBe(true);
  // });

  // test('Test 3: Placing a ship in a taken spot should return false', () => {
  //   expect(testGameBoard.placeShip(testShipTwo, 1, 1)).toBe(false);
  // });

  // test('Test 4: Sending a successful attack should return true', () => {
  //   expect(testGameBoard.recieveAttack(1, 1)).toBe(true);
  // });

  // test('Test 5: Sending a unsucessful attack should return false', () => {
  //   expect(testGameBoard.recieveAttack(1, 1)).toBe(false);
  // });

  // test('Test 6: If all ships sunk, it should return true', () => {
  //   expect(testGameBoard.allShipsSunk()).toBe(true);
  // });
});
