import React from 'react';
import Row from '../Row/Row';

const Body = ({ data, config }) => <tbody>{data.map((ele, i) => <Row key={`row-${i}`} rowData={ele} config={config} />)}</tbody>

export default Body;
