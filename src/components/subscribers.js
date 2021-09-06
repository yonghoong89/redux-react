import React from 'react'
import { connect } from 'react-redux'
import { addSubscriber, removeSubscriber } from '../redux'

const Subscribers = ({count,addSubscriber,removeSubscriber}) => {
  return (
    <div className="items">
      <h2>구독자 수 : {count}</h2>
      <button type="button" onClick={()=> addSubscriber()}>구독하기</button>
      <button type="button" onClick={()=> removeSubscriber()}>구독 취소하기</button>
    </div>
  )
}

const mapStateToProps = ({subscribers}) =>{
  return{
    count:subscribers.count
  }
}

const mapDispatchToProps ={
  addSubscriber,
  removeSubscriber
}

export default connect(mapStateToProps,mapDispatchToProps)(Subscribers)
