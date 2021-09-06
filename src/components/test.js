import React from 'react'
import { connect } from 'react-redux'
import { addSubscriber, removeSubscriber } from '../redux/subscribers/actions'

const Test = (props) => {
  console.log(props)
  return (
    <div>
      가나다라
    </div>
  )
}

const mapStateToProps = (state) =>{
  return{
    count:state.count
  }
}

const mapDispatchToProps = (dispatch) =>{
  return {
    addSubscriber: () => dispatch(addSubscriber())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Test)
