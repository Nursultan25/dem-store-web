const CATEGORYID = "CATEGORYID";

const defaultState = {
  categoryId: [],
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case CATEGORYID:
      return { ...state, categoryId: action.payload };
    default:
      return state;
  }
};

export const setIsCategoryId = (payload) => ({ type: CATEGORYID, payload });

export default reducer;
