import React, { useState, useTransition } from 'react'
import Container from '../components/Container'
import Image from '../components/Image'
import SignUpBanner from '../assets/signupbanner.png'
import Input from '../components/Input'
import Button from '../components/Button'
import Flex from '../components/Flex'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5'

const Login = () => {
  const [showPasswordIcon, setShowPasswordIcon] = useState(false)
  const [showPassword, setShowPassword] = useState('password')

  const auth = getAuth()
  const navigate = useNavigate()

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const [emailError, setEmailError] = useState()
  const [passwordError, setPasswordError] = useState()

  const handleEmail = (e) => {
    setEmail(e.target.value)
    setEmailError('')
  }
  const handlePassword = (e) => {
    setPassword(e.target.value)
    setPasswordError('')
  }

  const handleLogin = () => {
    if (!email) {
      setEmailError('Enter Your Email')
    }
    if (!password) {
      setPasswordError('Enter Your Password')
    }
    if (email && password) {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          if (userCredential.user.emailVerified) {
            toast.success('Registration Complete')
            navigate('/')
          } else {
            toast.error('Verify Your Email')
          }
        })
        .catch((error) => {
          const errorCode = error.code
          const errorMessage = error.message
          console.log(errorMessage)
          console.log(errorCode)
        })
    }
  }

  const handleShowPassword = () => {
    setShowPasswordIcon(!showPasswordIcon)
    setShowPassword(showPassword === 'password' ? 'text' : 'password')
  }
  return (
    <section className="py-30">
      <Container>
        <ToastContainer />
        <Flex className="items-center">
          <div className="w-8/12 pr-10">
            <Image src={SignUpBanner} />
          </div>

          <div className="w-4/12">
            <h4 className="font-medium text-4xl text-black font-inter">
              Login to Exclusive
            </h4>
            <p className="font-normal font-pop text-base text-black pt-6">
              Enter your details below
            </p>

            <Input
              onChange={handleEmail}
              type="text"
              placeholder="Email or Phone Number"
              className="w-full outline-none border-b border-[#00000066] mt-10"
            />
            <p className="text-xl pt-1 text-red-500">{emailError}</p>

            <div className="relative">
              <Input
                onChange={handlePassword}
                type={showPassword}
                placeholder="Password"
                className="relative w-full outline-none border-b border-[#00000066] mt-10"
              />
              <div onClick={handleShowPassword} className="cursor-pointer absolute top-[60%] right-0">
                {showPasswordIcon ? (
                  <IoEyeOutline className=" text-2xl" />
                ) : (
                  <IoEyeOffOutline className="text-2xl" />
                )}
              </div>
            </div>
            <p className="text-xl pt-1 text-red-500">{passwordError}</p>

            <div className="mt-10 flex justify-between items-center">
              <div onClick={handleLogin}>
                <Button text="Log In" />
              </div>

              <p className="font-normal texl-base font-pop text-secondary">
                Forget Password?
              </p>
            </div>
          </div>
        </Flex>
      </Container>
    </section>
  )
}

export default Login
