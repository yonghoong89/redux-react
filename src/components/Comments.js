import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import {fetchComments} from '../redux'

const Comments = ({fetchComments}) => {

  useEffect(()=>{
    fetchComments()
  }, [])

  return (
    <div className="items">
      
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