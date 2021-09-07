import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import {fetchComments} from '../redux'

const Comments = ({fetchComments, loading, comments}) => {

  useEffect(()=>{
    fetchComments()
  }, [])

  const commentsItmes = loading ? (<div>is loading...</div>) : (
    comments.map((comment)=>(
      <div key={comment.id}>
        <p>{comment.name}</p>
        <p>{comment.email}</p>
        <p>{comment.body}</p>
      </div>
    ))
  )

  return (
    <div className="comments">
      {commentsItmes}
    </div>
  )
}

const mapStateToProps = ({comments}) =>{
  return{
    comments:comments.items
  }
}

const mapDispaychToProps = {
  fetchComments
}

export default connect(mapStateToProps,mapDispaychToProps)(Comments)