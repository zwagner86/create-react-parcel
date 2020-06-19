import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import './App.scss';

const App = ({message}) => {
    return (
        <div className="App">
            React + Parcel
            {message && <div className="App">{message}</div>}
        </div>
    );
};

App.propTypes = {
    message: PropTypes.string,
};

const mapStateToProps = (state) => {
    const {
        message: {message}
    } = state;

    return {
        message,
    };
};

export default connect(mapStateToProps)(App);
