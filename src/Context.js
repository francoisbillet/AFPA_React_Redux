import React from "react";
// import createPersistedState from "use-persisted-state";

// const usePersistedState = createPersistedState();

const MyContext = React.createContext({});

const MyContextComponentProvider = props => {
  // usePersistedState au lieu de useState pour des données persistantes
  const [cart, setCart] = React.useState([]);
  const addToCart = product => {
    if (!cart.find(element => element.id === product.id)) {
      setCart([...cart, product]);
    }
    // ou includes
  };
  //   console.log(cart);
  return (
    <MyContext.Provider value={{ cart, addToCart }}>
      {props.children}
    </MyContext.Provider>
  );
};

export default MyContext;
export { MyContextComponentProvider };
