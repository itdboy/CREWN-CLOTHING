import React from 'react'

import './sign-in-and-sing-up.style.scss'
import SignIn from '../../components/sign-in/sign-in.component'
import SignUp from '../../components/sing-up/sign-up.component'

const SignInAndSignUpPage = () => (
  <div className='sign-in-sing-up'>
    <SignIn />
    <SignUp />
  </div>
)

export default SignInAndSignUpPage
