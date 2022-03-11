import { Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import RouteLayout from './Common/RouteLayout';
import Footer from './components/Footer';
import Header from './components/Header';
import { DASHBOARD_MAIN, LOGIN_ROUTES, MAIN_ROUTES } from './constants';
import { ToastContainer } from 'react-toastify';

function App() {
    const renderMainRoute = () => {
        return MAIN_ROUTES.map((route, index) => {
            return (
                <RouteLayout
                    name={route.name}
                    key={index}
                    component={route.component}
                    exact={route.exact}
                    path={route.path}
                />
            );
        });
    };

    const renderDashboardRoute = () => {
        return DASHBOARD_MAIN.map((route, index) => {
            return (
                <RouteLayout
                    name={route.name}
                    key={index}
                    component={route.component}
                    exact={route.exact}
                    path={route.path}
                />
            );
        });
    };

    const renderLoginRoute = () => {
        return LOGIN_ROUTES.map((route, index) => {
            return (
                <RouteLayout
                    name={route.name}
                    key={index}
                    component={route.component}
                    exact={route.exact}
                    path={route.path}
                />
            );
        });
    };

    const renderMain = () => (
        <>
            <div className="container">
                <Header />
                <div className="main">
                    <Switch>{renderMainRoute()}</Switch>
                </div>
            </div>
            <Footer />
        </>
    );

    return (
        <BrowserRouter>
            <ToastContainer />
            <Switch>
                {renderDashboardRoute()}
                {renderLoginRoute()}
                {renderMain()}
            </Switch>
        </BrowserRouter>
    );
}

export default App;
