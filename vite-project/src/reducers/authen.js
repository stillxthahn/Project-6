export const authenReducer = (state = false, action) => {
 if (action.type === "AUTHEN") {
  return action.value;
 }
 return state;
};
