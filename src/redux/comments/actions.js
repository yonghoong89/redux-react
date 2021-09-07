import { FETCH_COMMENTS, FETCH_COMMENTS_REQUEST, FETCH_COMMENTS_SUCESS, FETCH_COMMENTS_FAILURE } from "./types"

export const fetchCommentSucess = (comments) =>{
  return  {
    type: FETCH_COMMENTS_SUCESS,
    payload: comments
  }
}

export const fetchCommentFailure = (error) =>{
  return  {
    type: FETCH_COMMENTS_FAILURE,
    payload: error
  }
}

export const fetchCommentRequest = () =>{
  return  {
    type: FETCH_COMMENTS_REQUEST
  }
}

export const fetchComments = () =>{
  return (dispatch) => {
    dispatch(fetchCommentRequest())
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json())
    .then(comments=> dispatch(fetchCommentSucess(comments)))
    .catch(error => dispatch(fetchCommentFailure(error)))
  }
}