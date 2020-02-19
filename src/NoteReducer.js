const initialState = [];

const noteReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_NOTE":
      return [...state, action.note];
    default:
      return state;
  }
};

export default noteReducer;
