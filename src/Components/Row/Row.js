import React, {memo} from 'react'
import Cell from '../Cell/Cell';

/****************************************************************************************************/
/* this is a generic row component that will get the value from nested object  */
/* you just need to set the path (in the config) to the value e.g "movie.media.url"  */
/* the reduce function (cool function!) will iterate over the object and will get the value */
/****************************************************************************************************/

const Row = memo(({ rowData, config }) => {
    return (
        <tr>
           {config.map((ele, i) => <Cell key={`cell-${i}`} type={config[i].type || 'string'}>{config[i].fieldName.split('.').reduce((prev, curr) =>  prev ? prev[curr] : null, rowData)}</Cell>)} 
        </tr>
    )
})

export default Row;
