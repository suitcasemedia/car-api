// eslint-disable-next-line no-unused-vars
import { request } from './helpers';

/**
 * Pull vehicles information
 *
 * @return {Promise<Array.<vehicleSummaryPayload>>}
 */
// TODO: All API related logic should be made inside this function.

export default async function getData() {
  const basicInfo = await fetch('http://localhost:8080/api/vehicles.json');
  if (!basicInfo.ok) {
    throw new Error(basicInfo.statusText);
  }
  const basicInfoJson = await basicInfo.json();
  const fullInfoJson = await Promise.all(
    basicInfoJson.map(async (car) => {
      const response = await fetch(`http://localhost:8080${car.apiUrl}`)
      if (response.ok) {
        const detail = await response.json();
        return { ...car, ...detail };
      }
    })
  );
  return fullInfoJson.filter((car) => car !== undefined && car.price)
}
