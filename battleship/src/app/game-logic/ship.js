export default function ship(shipName, shipLength) {
  const shipData = {
    name: shipName,
    length: shipLength,
    points: new Array(shipLength).fill(false),
  };

  const hit = (index) => {
    if (shipData.points[index]) return false;
    shipData.points[index] = true;
    return true;
  };
  const isSunk = () => {
    if (shipData.points.every((point) => point === true)) return true;
    return false;
  };
  const getLength = () => shipData.length;

  const getShipStatus = () => [...shipData.points];

  const getShipName = () => shipData.name;

  return {
    hit,
    isSunk,
    getLength,
    getShipStatus,
    getShipName,
  };
}
