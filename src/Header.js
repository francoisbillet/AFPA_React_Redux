import React from "react";
import { Link, useHistory } from "react-router-dom";
import MyContext from "./Context";
import { connect } from "react-redux";
import { addNote } from "./Actions";

const Header = props => {
  //   let history = useHistory();
  const { cart } = React.useContext(MyContext);
  return (
    <header>
      <nav>
        <Link to="/">Accueil</Link>
        {/* éviter d'utiliser goBack() de history car si on part de google, on retourne à google */}
        {/* <button onClick={() => history.goBack()}>Accueil</button> */}
        <p>Cart : {cart.length}</p>
        <p>
          Moyenne des notes :
          {props.notes.length > 0
            ? props.notes.reduce((acc, item) => acc + item, 0) /
              props.notes.length
            : 5}
        </p>
        {/* {console.log(props.notes)} */}
      </nav>
    </header>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    notes: state.notes
  };
};
const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
