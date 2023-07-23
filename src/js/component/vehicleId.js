import { useParams } from "react-router";
import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";

export const VehicleId = () => {
    const { store, actions } = useContext(Context)
    const { vehicleId } = useParams()
    const vehicle = store.element && store.element[vehicleId]

    useEffect(() => {
        actions.fetchElement("vehicles",vehicleId)
    }, [])

    function imgError(e){
        e.target.src="https://starwars-visualguide.com/assets/img/placeholder.jpg"
    }

    let textElements = [];
    if (vehicle) {
        textElements = Object.entries(vehicle).map(([key, value]) => {
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
          <h1>Vehicle Detail</h1>
          <h2>id: {vehicleId} </h2>
          <div className="details">
            {vehicle && (
              <div><img className="pimg-vehicle"
                src={vehicle.img}
                onError={imgError}
                alt="vehicle"/></div>
            )}
            <div className="element">{textElements}</div>
          </div>
        </div>
    )
}