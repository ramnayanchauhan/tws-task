const getPostRequest = () => {
    return {
      type: "GET_POST_REQUEST",
    };
  };
  
  const getPostSuccess = (posts) => {
    return {
      type: "GET_POST_SUCCESS",
      payload: posts,
    };
  };
  
  const getPostFailure = (error) => {
    return {
      type: "GET_POST_FAILURE",
      payload: error,
    };
  };
 
  const url ='https://jsonplaceholder.typicode.com/posts';
  
  export const fetchPostsData = () => {
    return (dispatch) => {
      dispatch(getPostRequest());
      fetch(url, {
        method: "GET",
      })
        .then((response) => response.json())
        .then((data) => {
          dispatch(getPostSuccess(data)); 
        })
        .catch((error) => {
          const errorMessage = error.message;
          dispatch(getPostFailure(errorMessage));
        });
    };
  };