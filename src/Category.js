import React from "react";
import { Link, Route, Routes, useParams } from "react-router-dom";

const Item = () => {
    const {name} = useParams();

    return (
        <div>
            <h3>
                {name}
            </h3>
        </div>
    );
};

const Category = () => {

    return (
        <div> 

        </div>
    )
    }

export default Category;