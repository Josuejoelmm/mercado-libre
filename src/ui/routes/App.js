import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from '../components/Layout';
import HomeContainer from '../pages/Home/HomeContainer';
import ProductContainer from '../pages/ProductDetail/ProductContainer';
import { Provider } from 'react-redux';
import store from '../../redux/store';

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                    <Layout>
                        <Switch>
                            <Route exact path="/" component={HomeContainer} />
                            <Route path="/items/:id" component={ProductContainer} />
                        </Switch>
                    </Layout>
            </BrowserRouter>
        </Provider>
    );
}

export default App;