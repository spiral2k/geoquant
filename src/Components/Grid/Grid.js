import React from 'react';
import PropTypes from 'prop-types';

/* Components */
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import Header from '../Header/Header';
import Body from '../Body/Body';

const Grid = ({ config, data }) => {
    return (
      <ErrorBoundary>
        <table>
            <Header config={config} />
            <Body data={data} config={config} />
        </table>
      </ErrorBoundary>
  );
}

Grid.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    config: PropTypes.arrayOf(PropTypes.object).isRequired
  }

Grid.defaultProps = {
  data: [],
  config: [{ title: "did you forgot to pass the configuration?"}]
}

export default Grid;