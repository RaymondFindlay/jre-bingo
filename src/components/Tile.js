import React, { useState } from 'react'

const Tile = ({ id, content, callbackFunction }) => {
    const [isTileChecked, setTileChecked] = useState(false);
    

    const toggleTileIsChecked = () => {
        setTileChecked(!isTileChecked);
        callbackFunction(!isTileChecked, id)
    };
     
    return(
        <div 
            className="tile"
            style={{ 
                background: isTileChecked ? "#a61e22" : "",
                textDecoration: isTileChecked ? "line-through" : ""
            }}
            onClick={toggleTileIsChecked}
        >
            {content}
        </div>
    )
};

export default Tile;