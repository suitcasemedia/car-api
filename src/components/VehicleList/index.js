import React from 'react';
import useData from './useData';
import './style.scss';

export default function VehicleList() {
  // eslint-disable-next-line no-unused-vars
  const [loading, error, vehicles] = useData();

  if (loading) {
    return <div data-testid="loading">Loading</div>;
  }

  if (error) {
    return <div data-testid="error">{error}</div>;
  }
  console.log(vehicles);
  return (
    <div data-testid="results">
      <ul className="VehicleList">
        {vehicles.map((vehicle) => (
          <li className="vehicle">
            <picture className="vehicle__image">

              <source
                srcset={vehicle.media[0].url}
                media="(min-width: 600px)"
              />
              <img
                src={vehicle.media[1].url}
                alt={vehicle.id}
              />
            </picture>
            <div className="vehicle__info">
              <h2 className="vehicle__name">{vehicle.id}</h2>
              <h4 className="vehicle__price">
                From &nbsp;
                {vehicle.price}
              </h4>
              <h5 className="vehicle__caption">The pinnacle of refined capability</h5>

            </div>

          </li>
        ))}
      </ul>
      <p>List of vehicles will be displayed here</p>
      <p>
        Visit
        <a href="/api/vehicles.json" target="_blank"> /api/vehicles.json</a>
        {' '}
        (main endpoint)
      </p>
      <p>
        Visit
        <a href="/api/vehicle_fpace.json" target="_blank">/api/vehicle_fpace.json</a>
        {' '}
        (detail endpoint - apiUrl)
      </p>
      <p>
        Visit
        <a href="/api/vehicle_xf.json" target="_blank">/api/vehicle_xf.json</a>
        {' '}
        (vehicle without any price)
      </p>
    </div>
  );
}
