import React from 'react'
import { Redirect, Route, Switch } from "react-router-dom";
import DbzScreen from '../components/dbz/DbzScreen';
import DCScreen from '../components/dc/DcScreen';
import HeroScreen from '../components/heroes/HeroScreen';
import MarvelScreen from '../components/marvel/MarvelScreen';
import SearchScreen from '../components/search/SearchScreen';
import Navbar from '../components/ui/Navbar'

const DashboardRoutes = () => {
    return (
        <>
            <Navbar />

            <div className="container mt-2">
                <Switch>
                    <Route
                            exact path='/marvel'
                            component={ MarvelScreen }
                    />

                    <Route
                        exact path='/dc'
                        component={ DCScreen }
                    />

                    <Route
                        exact path='/dbz'
                        component={ DbzScreen }
                    />

                    <Route
                        exact path="/hero/:heroId"
                        component={ HeroScreen }
                    />

                    <Route
                        exact path="/search"
                        component={ SearchScreen }
                    />

                    <Redirect to="/marvel"/>
                </Switch>
            </div>
        </>
    )
}

export default DashboardRoutes
