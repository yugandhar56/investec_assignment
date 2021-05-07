import { SET_NAME } from '../actions/NameAction';

const initialState = {
  name: "",
};
export default (state = initialState, action) => {

  switch (action.type) {
    case SET_NAME:
      console.log(" === action ===" ,JSON.stringify(action.name))
      return {
       name:action.name
      }
      default:
        return{
            state
        }  
  };
}