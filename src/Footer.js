import React from "react";
import { connect } from "react-redux";
import { addNote } from "./Actions";

const Footer = props => {
  return (
    <React.Fragment>
      {[1, 2, 3, 4, 5].map(note => (
        <button
          key={note}
          onClick={e => {
            props.addNote(note);
            // console.log(e.target.innerText);
          }}
        >
          {note}
        </button>
      ))}
    </React.Fragment>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    notes: state.notes
  };
};
const mapDispatchToProps = dispatch => {
  return {
    addNote: note => dispatch(addNote(note))
  };
};

const FooterContainer = connect(mapStateToProps, mapDispatchToProps)(Footer);

export default FooterContainer;
