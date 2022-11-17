const CATEGORYID = "CATEGORYID";
const ISLOGGED = "ISLOGGED";
const PRODUCTSID = "PRODUCTSID";
const TITLE = "TITLE";
const DESCRIPTION = "DESCRIPTION";
const IMAGE = "IMAGE";
const PRICE = "PRICE";
const ISCATEGORY = "ISCATEGORY";

const defaultState = {
  categoryId: [],
  isLogged: false,
  productsId: '',
  istitle: '',
  isdescribtion: '',
  isimage: '',
  isprice: '',
  iscategory: '',
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case CATEGORYID:
      return { ...state, categoryId: action.payload };
    case ISLOGGED:
      return { ...state, isLogged: action.payload };
    case PRODUCTSID:
      return { ...state, productsId: action.payload };
    case TITLE:
      return { ...state, istitle: action.payload };
    case DESCRIPTION:
      return { ...state, isdescribtion: action.payload };
    case IMAGE:
      return { ...state, isimage: action.payload };
    case PRICE:
      return { ...state, isprice: action.payload };
    case ISCATEGORY:
      return { ...state, iscategory: action.payload };
    default:
      return state;
  }
};

export const setIsCategoryId = (payload) => ({ type: CATEGORYID, payload });
export const setIsLogged = (payload) => ({ type: ISLOGGED, payload });
export const setIsProductsId = (payload) => ({ type: PRODUCTSID, payload });
export const setIsTitle = (payload) => ({ type: TITLE, payload });
export const setIsDescribtion = (payload) => ({ type: DESCRIPTION, payload });
export const setIsImage = (payload) => ({ type: IMAGE, payload });
export const setIsPrice = (payload) => ({ type: PRICE, payload });
export const setIsCategory = (payload) => ({ type: ISCATEGORY, payload });

export default reducer;
