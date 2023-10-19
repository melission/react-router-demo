import React from "react";
import ResourceBlock from "./Resources";
import UselessFactWidget from "./UselessFactWidget";

const MainPage = () => {

    const firstDiv = `“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius vitae ipsum et commodo. In scelerisque est magna, ut fringilla purus congue eu. Mauris id metus ac metus porta aliquet”`

    return (
        <>
            <div class="grid grid-cols-1 md:grid-cols-3 mt-4 grid-rows-4 gap-4 h-[80vh] w-full gap-y-2 p-3 bg-slate-100">
                <div class="box row-span-2 h-full">{firstDiv}</div>
                <div class="box row-start-3 h-full">2</div>
                <div class="box row-start-4 h-full flex items-center justify-center"><UselessFactWidget /></div>
                <div class="box row-span-4 h-full bg-red-50">4</div>
                <div class="box row-span-2 h-full flex items-center justify-center"></div>
                <div class="box h-full">6</div>
                <div class="box h-full flex items-center justify-center" ><ResourceBlock /></div>
            </div>
            <footer class="bg-gray-800 absolute bottom-0 w-full text-white text-center m-0 p-4">
                &copy; 2023 Polin Belousova.
            </footer>
        </>
    )
}

export default MainPage