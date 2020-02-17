import React from 'react';
import { connect } from 'react-redux';
import Grid from '../../Components/Grid/Grid';
import config from '../../misc/config';

const App = ({ data }) => <Grid config={config} data={data} />;

const mapStateToProps = state => ({ data: state.movies });

export default connect(mapStateToProps)(App);
