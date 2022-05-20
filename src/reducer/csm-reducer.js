const csmReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE":
      return [...state, ...action.userList];
    case "DELETE":
      const index = state.findIndex((s) => s.id === action.id);
      return [...state.slice(0, index), ...state.slice(index + 1)];
    default:
      return state;
  }
};

export default csmReducer;
