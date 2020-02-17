import React, { memo } from 'react';

const Header = memo(({ config }) => <thead><tr>{config.map(({ title }, i) => <th key={`title-${i}`}>{title}</th>)}</tr></thead>)

export default Header;
