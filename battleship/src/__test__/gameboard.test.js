import { expect, describe, it } from '@jest/globals';
import gameboard from '../app/game-logic/gameboard';
import ship from '../app/game-logic/ship';

describe('Testing game board module', () => {
  const testGameBoard = gameboard();
  const testShipOne = ship('Carrier', 5);
  const testShipTwo = ship('Battleship', 4);

  it('Test 1: Out of bounds placement returns false on x direction', () => {
    expect(testGameBoard.canBePlaced(testShipOne, 0, 6, 'x')).toBe(false);
  });

  it('Test 2: Out of bounds placement returns false on y axis', () => {
    expect(testGameBoard.canBePlaced(testShipOne, 7, 0, 'y')).toBe(false);
  });

  it('Test 3: in bounds placement returns true on x axis and places ship', () => {
    expect(testGameBoard.canBePlaced(testShipOne, 2, 4, 'x')).toBe(true);
    expect(testGameBoard.placeShip(testShipOne, 2, 4, 'x'));
  });

  it('Test 4: in bounds placement returns true on y axis', () => {
    expect(testGameBoard.canBePlaced(testShipTwo, 0, 0, 'y')).toBe(true);
    expect(testGameBoard.placeShip(testShipTwo, 0, 0, 'y')).toBe(true);
  });

  it('Test 5: Placing a ship in a taken spot should return false on x axis', () => {
    expect(testGameBoard.canBePlaced(testShipTwo, 2, 3, 'x')).toBe(false);
  });

  it('Test 6: Placing a ship in a taken spot should return false on the y axis', () => {
    expect(testGameBoard.canBePlaced(testShipOne, 2, 0, 'y')).toBe(false);
  });

  it('Test 5: Sending a unsucessful attack should return missed', () => {
    expect(testGameBoard.receiveAttack(1, 1)).toBe('missed');
  });

  it('Test 6: Sending a successfull attack should return hit', () => {
    expect(testGameBoard.receiveAttack(0, 0)).toBe('hit');
  });

  it('Test 7: If all ships are sunk, recieve attack Returns win', () => {
    const testShipThree = ship('Merry', 4);
    const testBoardTwo = gameboard();
    testBoardTwo.placeShip(testShipThree, 0, 0, 'x');
    testBoardTwo.receiveAttack(0, 0);
    testBoardTwo.receiveAttack(0, 1);
    testBoardTwo.receiveAttack(0, 2);
    const finalAttack = testBoardTwo.receiveAttack(0, 3);

    expect(finalAttack).toBe('win');
  });
});
