import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import ProductList from "./ProductList";
import ProductPage from "./ProductPage";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MyContext, { MyContextComponentProvider } from "./Context";
import { Provider } from "react-redux";
import store from "./Store";

function App() {
  return (
    <Provider store={store}>
      <MyContextComponentProvider>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/">
              <div className="App">
                <main className="content">
                  <ProductList />
                </main>
              </div>
            </Route>
            <Route exact path="/product/:id">
              <ProductPage />
            </Route>
          </Switch>
          <Footer />
        </BrowserRouter>
      </MyContextComponentProvider>
    </Provider>
  );
}

export default App;
