const initialState = {
    posts: [],
    loading: false,
    error: null,
  };
  
  const posts = (state = initialState, action) => {
    switch (action.type) {
      case "GET_POST_REQUEST":
        return { ...state, loading: true };
      case "GET_POST_SUCCESS":
        return { loading: false, posts: action.payload };
      case "GET_POST_FAILURE":
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  export default posts;