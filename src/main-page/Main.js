import React from "react";
import GridWithHoverBorders from "./Grid/Grid";
import ResourceBlock from "./Resources";
import UselessFactWidget from "./UselessFactWidget";
import TimeWidget from "./TimeWidget";
import IdeaGenerator from "../leisureIdeas/IdeaGenerator";

const MainPage = () => {

    const firstDiv = `“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius vitae ipsum et commodo. In scelerisque est magna, ut fringilla purus congue eu. Mauris id metus ac metus porta aliquet”`

    return (
        <div class="overflow-y-auto">
            <div class="grid grid-cols-1 md:grid-cols-3 mt-4 grid-rows-4 gap-4 md:h-[80vh] w-full gap-y-2 p-3">
                <div class="box row-span-2 h-full">{firstDiv}</div>
                <div class="box row-start-3 h-full"><TimeWidget /></div>
                <div class="box row-start-4 h-full flex items-center justify-center"><UselessFactWidget /></div>
                <div class="box row-span-4 h-full"><IdeaGenerator /></div>
                <div class="box row-span-2 h-full flex items-center justify-center"><GridWithHoverBorders /></div>
                <div class="box h-full">6</div>
                <div class="box h-full flex items-center justify-center" ><ResourceBlock /></div>
            </div>
            <footer class="text-xl font-semibold italic absolute md:bottom-0 w-full text-center m-0 p-4">
                &copy; 2023 <span class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block">
                    <span class="relative text-white mx-2">Polin Belousova.</span>
                </span>
            </footer>
        </div>
    )
}

export default MainPage