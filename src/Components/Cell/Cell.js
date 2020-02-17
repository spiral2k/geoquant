import React, {memo} from 'react';

const Cell = memo((props) => {
    const getCellContentByType = () => {
        switch (props.type) {
            case "img": return <img src={props.children} alt={props.children} />
            case "anchor": return <a href={props.children} alt="">{props.children}</a>

            /* we can easly add more cell types here */
            default: return props.children;
        }
    }

    return <td>{getCellContentByType()}</td>
})

export default Cell;