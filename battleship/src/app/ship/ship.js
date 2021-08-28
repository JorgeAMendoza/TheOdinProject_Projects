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
    if (!isHit(index)) {
      shipData.points[index] = true;
      return true;
    }
    return false;
  };
  const isSunk = () => {
    if (shipData.points.every((point) => point === true)) return true;
    return false;
  };
  const getLength = () => shipData.length;

  const getShipStatus = () => [...shipData.points];

  return {
    hit,
    isSunk,
    getLength,
    getShipStatus,
  };
}
