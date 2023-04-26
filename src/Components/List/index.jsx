import React from "react";
import { Box, Button } from "../UI";
import { lista } from "../../info";

const List = () => {
    return <Box>
        {
            lista.cargos.map( ({id, type, value, from, date}) => {
                return <div key={id}>
                    <span>{ type }</span>
                    <span>{ from }</span>
                    <span>{ value }</span>
                </div>
            } )
        }
        <Button>Ver más</Button>
    </Box>
}

export default List;