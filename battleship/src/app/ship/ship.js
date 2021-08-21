export default function ship(shipName, shipLength) {
  const shipData = {
    name: shipName,
    length: shipLength,
    points: new Array(shipLength).fill(false),
  };

  const isHit = (index) => {
    if (shipData.points[index] === false) return false;
    return true;
  };
  const hit = (index) => {
    shipData.points[index] = true;
  };
  const isSunk = () => {
    if (shipData.points.every((point) => point === true)) return true;
    return false;
  };

  return {
    isHit,
    hit,
    isSunk,
  };
}
