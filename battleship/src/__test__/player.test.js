import { expect, describe, it } from '@jest/globals';
import gameboard from '../app/game-logic/gameboard';
import player from '../app/game-logic/player';
import ship from '../app/game-logic/ship';

describe('Test Suite for Player Module', () => {
  const playerOneBoard = gameboard();
  const playerTwoBoard = gameboard();
  const playerOne = player('Jorge', playerOneBoard);
  const playerTwo = player('Isabel', playerTwoBoard);

  it('Test 1: Create Carrier ship and place it down on the board.', () => {
    const testShip = ship('Carrier', 5);
    expect(playerOne.canPlace(testShip, 0, 0, 'x')).toBe(true);
    expect(playerOne.placeShip(testShip, 0, 0, 'x')).toBe(true);
  });

  it('Test 2: Place down Battleship in taken spot and error checking succceeds', () => {
    const testShip = ship('Battleship', 4);
    expect(playerOne.canPlace(testShip, 0, 0, 'y')).toBe(false);
  });

  it('Test 3: Send attack to the opponent board and return true if hit', () => {
    const testShipOne = ship('Carrier', 5);
    const TestShipTwo = ship('Patrol Boat', 3);
    playerTwo.placeShip(testShipOne, 0, 0, 'x');
    playerTwo.placeShip(TestShipTwo, 0, 1, 'y');
    expect(playerTwo.getAttack(0, 0)).toBe('hit');
  });

  it('Test 4: Missed Attack`', () => {
    expect(playerTwo.getAttack(4, 4)).toBe('missed');
  });

  it('Test 5: Sunken ship but not game won', () => {
    playerTwo.getAttack(1, 0);
    playerTwo.getAttack(2, 0);
    playerTwo.getAttack(3, 0);

    expect(playerTwo.getAttack(4, 0)).toBe('sunk');
  });

  it('Test 6: Sunken ship and all ships sunk', () => {
    playerTwo.getAttack(0, 1);
    playerTwo.getAttack(0, 2);

    expect(playerTwo.getAttack(0, 3)).toBe('win');
  });

  it('Test 7: Sunken ship and all ship sunk for other player', () => {
    playerOne.getAttack(0, 0);
    expect(playerOne.getAttack(1, 0)).toBe('hit');
    playerOne.getAttack(2, 0);
    playerOne.getAttack(3, 0);
    expect(playerOne.getAttack(4, 0)).toBe('win');
  });
});
