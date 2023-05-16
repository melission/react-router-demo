import React from "react";
import classicBooks from "./bookList"


function paginateList(list, currentPage) {
    const itemsPerPage = 10;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedList = list.slice(startIndex, endIndex);
    return paginateList;
}


const Books = () => {
    let pagList = paginateList(classicBooks, currentPage);

    return (
        <div>
            {pagList}
        </div>
    )
}


