const initialState = {
    newpost: [],
    loading: false,
    error: null,
  };
  
  const newposts = (state = initialState, action) => {
    switch (action.type) {
      case "GET_NEWPOST_REQUEST":
        return { ...state, loading: true };
      case "GET_NEWPOST_SUCCESS":
        return { loading: false, newpost: action.payload };
      case "GET_NEWPOST_FAILURE":
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  export default newposts;