import React, { useEffect, useContext, useState } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { PeopleCard } from "./peopleCard";
import { Planets } from "./planets";
import { People } from "./people";


export const ListCards = ({element, page}) => {
    const { store, actions } = useContext(Context)
    const [activeElement, setActiveElement] = useState(null);

    useEffect(() => {
        actions.fetchStarWars(element, page)
    },[page])
    return (
        <>
        <h1 className="title p-3">{element}</h1><div className="row flex-nowrap overflow-auto mb-5">
            {
                store[element]?.map(item => {
                    return <PeopleCard key={item.uid} item={item} element={element}/>
                }) || <p>Loading {element}</p>}
        </div>
        </>
    )
}

