import { expect, describe, it } from '@jest/globals';
import player from '../app/player/player';
import gameboard from '../app/gameboard/';

describe('Test Suite for Player Module', () => {
  const playerOne = player('Jorge', gameboard(), gameboard());
  const playerTwo = player('Isabel', gameboard(), gameboard());

  it('Test 1: Create Carrier ship and place it down on the board.', () => {});

  it('Test 2: Place down Battleship in taken spot and error checking succceeds', () => {});

  it('Test 3: Send attack to the opponent board and return true if hit');

  it('Test 4: Send attack to the opponent board and return `', () => {});
});
