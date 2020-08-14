const Reducer2 = (state = false, action: any) => {
  switch (action.type) {
    case "SIGN_IN":
      return !state;
    case "DECREMENT":
      return state;
    default:
      return state;
  }
};

export default Reducer2;
