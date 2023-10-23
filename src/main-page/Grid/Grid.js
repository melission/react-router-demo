import React from 'react';
import './grid.css'
import GridImages from './GridImages';

const GridWithHoverBorders = () => {

    return (
        <div className='grid grid-cols-2 gap-4'>
            {GridImages.map((element, index) => (
                <div key={index} className="group mx-auto object-cover grid-cell w-[40%]">
                    <img src={element.image}
                        className="w-full h-full"
                        alt={element.name} />
                </div>
            ))}
        </div>
    );
};

export default GridWithHoverBorders;
