import React from 'react';
import PropTypes from 'prop-types';
import Helmet from '../../components/Helmet';
import DashboardHeader from '../../components/DashBoard/DashboardHeader';
import DashboardSideBar from '../../components/DashBoard/DashboardSideBar';
import { Switch, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import RouteLayout from '../../Common/RouteLayout';
import { user } from '../../assets/fake-data/products_api';
import { DASHBOARD_ROUTES } from '../../constants';

const renderDashboardRender = (url) => {
    let xhtml = null;
    xhtml = DASHBOARD_ROUTES.map((route, index) => {
        return (
            <RouteLayout
                name={route.name}
                key={index}
                component={route.component}
                exact={route.exact}
                path={route.path}
                url={url}
            />
        );
    });
    return xhtml;
};

function DashBoard(props) {
    const { url } = useParams();
    return (
        <Helmet title="dashboard">
            <div className="dashboard">
                <DashboardHeader />
                <DashboardSideBar admin={user} />
                <Switch>{renderDashboardRender(url)}</Switch>
            </div>
        </Helmet>
    );
}

DashBoard.propTypes = {};

export default DashBoard;
