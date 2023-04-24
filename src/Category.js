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

// const Category = () => {
//     const {url, path} = useRouteMatch();

//     return (
//         <div>
//             <ul>
//                 <li>
//                     <Link to={`${url}/shoes`}>Shoes</Link>
//                 </li>
//                 <li>
//                     <Link to={`${url}/boots`}>Boots</Link>
//                 </li>
//                 <li>
//                     <Link to={`${url}/footwear`}>Footwear</Link>
//                 </li>
//             </ul>
//             <Route path={`${path}/:name`}>
//                 <Item />
//             </Route>
//         </div>
//     );
// };

const Category = () => {

return (
    <div>
        <ul>
            <li>
                <Link to="shoes/*">Shoes</Link>
            </li>
            <li>
                <Link to="boots/*">Boots</Link>
            </li>
            <li>
                <Link to="footwear/*">Foorwear</Link>
            </li>
        </ul>

        <Routes>
            <Route path="shoes/*" element={<Item />} />
            <Route path="boots/*" element={<Item />} />
            <Route path="footwear/*" element={<Item />} />
        </Routes>
    </div>
)
}

export default Category;