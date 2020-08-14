export const increment = (action: any) => {
  return {
    type: "INCREMENT",
    payload: action.payload
  };
};

export const decrement = (action: any) => {
  return {
    type: "DECREMENT",
    payload: action.payload
  };
};
