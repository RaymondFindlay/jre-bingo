import React from 'react';
import Tile from './Tile.js';
import TileData from './../TileData.json';

const TileContainer = () => {

    let bingo = [];

    const constuctBingoArrayCallback = (checked, id) => {
        if (checked) {
            bingo.push(id);
        } else {
            let index = bingo.indexOf(id);
            if (index > -1) {
                bingo.splice(index, 1);
            }
        }

        if (bingo.length === TileData.length) {
            alert('BINGO!')
        }
    }

    const tiles = TileData.map((tile) => {
        return (
            <Tile
                key={tile.id}
                id={tile.id}
                content={tile.content}
                callbackFunction={constuctBingoArrayCallback}
            />
        )
    });

    return (
        <div className="tile-container">
            {tiles}
        </div>
    )
};

export default TileContainer;