import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "../components/Layout";
import HomeContainer from "../pages/Home/HomeContainer";
import ProductContainer from "../pages/ProductDetail/ProductContainer";
import { Provider } from "react-redux";
import store from "../../redux/store";
import { HelmetProvider } from "react-helmet-async";

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <HelmetProvider>
                    <Layout>
                        <Switch>
                            <Route
                                exact
                                path="/items"
                                component={HomeContainer}
                            />
                            <Route
                                exact
                                path="/items/:id"
                                component={ProductContainer}
                            />
                        </Switch>
                    </Layout>
                </HelmetProvider>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
