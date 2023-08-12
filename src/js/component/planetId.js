import { useParams } from "react-router";
import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";

export const PlanetId = () => {
  const { store, actions } = useContext(Context);
  const { planetId } = useParams();
  const planet = store.element && store.element[planetId];

  useEffect(() => {
    actions.fetchElement("planets", planetId);
  }, []);

  function imgError(e) {
    e.target.src = "https://via.placeholder.com/204x214?text=Photo have we not";
  }

  let textElements = [];
  if (planet) {
    textElements = Object.entries(planet).map(([key, value]) => {
      if (key !== "img") {
        return (
          <h5 key={key}>
            {key}: {value}
          </h5>
        );
      }
      return null;
    });
  }
  return (
    <div className="text-center mt-5">
      <h1>Planet Detail</h1>
      <h2>id: {planetId} </h2>
      <div className="details d-flex justify-content-center mt-5">
        {planet && (
          <div>
            <img
              className="pimg"
              src={planet.img}
              onError={imgError}
              alt="planet"
            />
          </div>
        )}
        <div className="element">{textElements}</div>
      </div>
    </div>
  );
};
