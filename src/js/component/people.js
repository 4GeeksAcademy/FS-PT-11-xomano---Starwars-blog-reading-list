import React, { useState, useEffect, useContext } from "react";
import { ListCards } from "./cards";
import { Link, useSearchParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const People = () => {
    const { store, actions } = useContext(Context)
    const [searchParams, setSearchParams] = useSearchParams()
    const [pages, setPages] = useState()

    useEffect(() => {
        actions.fetchPages("people").then((totalPages) => {
            setPages(totalPages);
        });
    }, []);

    const updateList =(pageNumber) => {
        setSearchParams({pageNumber})
    }

    return (
        <div className="text-center mt-5">
            <ListCards element="people" page={searchParams.get("page")} />
            <nav aria-label="Page navigation example">
                <ul className="pagination d-flex justify-content-center">
                    <li className="page-item">
                        <Link className="page-link" to={`/planets?page=${Number(searchParams.get("page"))-1}`}  aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                        </Link>
                    </li>
                    {
                        new Array(pages).fill("").map((item, index) => 
                        <li key={index+1} className={`page-item ${searchParams.get("page") == index+1 ? "active" : ""}`}>
                            <Link className="page-link" to={`/people?page=${index+1}`} onClick={()=>updateList(index+1)}>{index+1}</Link>
                        </li>
                        )
                    }
                    <li className="page-item">
                        <Link className="page-link" to={`/planets?page=${Number(searchParams.get("page"))+1}`} aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                        </Link>
                    </li>
                </ul>
            </nav>
            <h3>Pagina {searchParams.get("page")}</h3>
        </div>
    )
}