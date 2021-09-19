import { expect, describe, it } from '@jest/globals';
import player from '../app/player/player';
import gameboard from '../app/gameboard/gameboard';
import ship from '../app/ship/ship';

describe('Test Suite for Player Module', () => {
  const playerOneBoard = gameboard();
  const playerTwoBoard = gameboard();
  const playerOne = player('Jorge', playerOneBoard, playerTwoBoard);
  const playerTwo = player('Isabel', playerTwoBoard, playerOneBoard);

  it('Test 1: Create Carrier ship and place it down on the board.', () => {
    const testShip = ship('Carrier', 5);
    expect(playerOne.placeShip(testShip, 0, 0, 'x')).toBe(true);
  });

  it('Test 2: Place down Battleship in taken spot and error checking succceeds', () => {
    const testShip = ship('Battleship', 4);
    expect(playerOne.placeShip(testShip, 0, 0, 'y')).toBe(false);
  });

  it('Test 3: Send attack to the opponent board and return true if hit', () => {
    const testShipOne = ship('Carrier', 5);
    const TestShipTwo = ship('Patrol Boat', 3);
    playerTwo.placeShip(testShipOne, 0, 0, 'x');
    playerTwo.placeShip(TestShipTwo, 0, 1, 'y');
    expect(playerOne.sendAttack(0, 0)).toBe('hit');
  });

  it('Test 4: Missed Attack`', () => {
    expect(playerOne.sendAttack(4, 4)).toBe('missed');
  });

  it('Test 5: Sunken ship but not game won', () => {
    playerOne.sendAttack(1, 0);
    playerOne.sendAttack(2, 0);
    playerOne.sendAttack(3, 0);

    expect(playerOne.sendAttack(4, 0)).toBe('sunk');
  });

  it('Test 6: Sunken ship and all ships sunk', () => {
    playerOne.sendAttack(0, 1);
    playerOne.sendAttack(0, 2);

    expect(playerOne.sendAttack(0, 3)).toBe('win');
  });

  it('Test 7: Sunken ship and all ship sunk for other player', () => {
    playerTwo.sendAttack(0, 0);
    expect(playerTwo.sendAttack(1, 0)).toBe('hit');
    playerTwo.sendAttack(2, 0);
    playerTwo.sendAttack(3, 0);
    expect(playerTwo.sendAttack(4, 0)).toBe('win');
  });
});
