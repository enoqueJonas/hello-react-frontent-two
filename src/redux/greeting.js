export const GREETINGS_RETRIEVED = 'hello-react-front-end/src/redux/greeting/GREETINGS_RETRIEVED';

const greetingsReducer = (state = '', action) => {
  const { type, payload } = action;
  switch (type) {
    case `${GREETINGS_RETRIEVED}/fulfilled`:
      return { ...state, message: payload };
    default:
      return state;
  }
};

export default greetingsReducer;
