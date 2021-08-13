const getNewPostRequest = () => {
    return {
      type: "GET_NEWPOST_REQUEST",
    };
  };
  
  const getNewPostSuccess = (newpost) => {
    return {
      type: "GET_NEWPOST_SUCCESS",
      payload: newpost,
    };
  };
  
  const getNewPostFailure = (error) => {
    return {
      type: "GET_NEWPOST_FAILURE",
      payload: error,
    };
  };
 
  const url ='https://jsonplaceholder.typicode.com/posts';
  
  export const fetchNewPostsData = () => {
    return (dispatch) => {
      dispatch(getNewPostRequest());
      fetch(url, {
        method: "POST",
      })
        .then((response) => response.json())
        .then((data) => {
          dispatch(getNewPostSuccess(data));
        })
        .catch((error) => {
          const errorMessage = error.message;
          dispatch(getNewPostFailure(errorMessage));
        });
    };
  };