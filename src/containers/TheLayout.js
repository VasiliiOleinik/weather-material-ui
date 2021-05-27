import React from 'react';
import { connect } from 'react-redux';
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import {
    TheContent,
    TheFooter,
    TheHeader
} from './index';
import configureStore from 'src/store/configureStore';

const TheLayout = () => {
    const store = configureStore();
    return (

        <div className="app">
            <TheHeader />
            <TheContent />
            <TheFooter />
        </div>

    )
}

const mapStateToProps = function (state) {
    return {
       city: state.weatherReducer.city
    }
}

export default compose(withRouter, connect(mapStateToProps))(TheLayout);