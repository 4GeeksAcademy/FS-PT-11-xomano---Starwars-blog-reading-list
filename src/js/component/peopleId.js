import { useParams } from "react-router";
import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";

export const PeopleId = () => {
  const { store, actions } = useContext(Context);
  const { peopleId } = useParams();
  const person = store.element && store.element[peopleId];

  useEffect(() => {
    actions.fetchElement("people", peopleId);
  }, []);

  function imgError(e) {
    e.target.src = "https://via.placeholder.com/204x214?text=Photo have we not";
  }

  let textElements = [];
  if (person) {
    textElements = Object.entries(person).map(([key, value]) => {
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
      <h1>People Detail</h1>
      <h2>id: {peopleId} </h2>
      <div className="details d-flex justify-content-center mt-5">
        {person && (
          <div>
            <img
              className="pimg"
              src={person.img}
              onError={imgError}
              alt="person"
            />
          </div>
        )}
        <div className="element">{textElements}</div>
      </div>
    </div>
  );
};
