import React, { useEffect, useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { ListCards } from "../component/cards";

export const Home = () => {
  const { store, actions } = useContext(Context);

  // useEffect(() => {
  // 	actions.fetchStarWars("planets")
  // 	actions.fetchStarWars("people")
  // 	actions.fetchStarWars("vehicles")
  // }, [])

  return (
    <div className="text-center mt-5">
      {/* <ListCards element="people"></ListCards>
			<ListCards element="planets"></ListCards>
			<ListCards element="vehicles"></ListCards> */}
      {["planets", "people", "vehicles"].map((element) => (
        <ListCards key={element} element={element} />
      ))}
    </div>
  );
};
