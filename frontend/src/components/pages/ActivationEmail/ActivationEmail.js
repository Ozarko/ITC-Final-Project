import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router'
import { activateEmail } from '../../../redux/actions/auth/authAction'

const ActivationEmail = () => {

  const dispatch = useDispatch()

  const {activation_token} = useParams()

  useEffect(()=> {
    if(activation_token) {
      dispatch(activateEmail(activation_token))
    }
  },[])

  return (
    <div>
dfgdfgdfg
    </div>
  )
}

export default ActivationEmail
