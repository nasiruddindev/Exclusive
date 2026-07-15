import React, { useState } from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Input from '../components/Input'
import Button from '../components/Button'
import { FcGoogle } from 'react-icons/fc'
import Image from '../components/Image'
import SignUpBanner from '../assets/signupbanner.png'
import { ToastContainer, toast } from 'react-toastify'
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5'

const SignUp = () => {
  const [showPasswordIcon, setShowPasswordIcon] = useState(false)
  const [showPassword,setShowPassword] = useState("password")

  const auth = getAuth()
  const navigate = useNavigate()

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.#^()_\-+=])[A-Za-z\d@$!%*?&.#^()_\-+=]{8,}$/

  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [nameError, setNameError] = useState()
  const [emailError, setEmailError] = useState()
  const [passwordError, setPasswordError] = useState()

  const handleName = (e) => {
    setName(e.target.value)
    setNameError('')
  }

  const handleEmail = (e) => {
    setEmail(e.target.value)
    setEmailError('')
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
    setPasswordError('')
  }

  const handleCreateAccount = () => {
    if (!name) {
      setNameError('Enter Your Name')
    }
    if (!email) {
      setEmailError('Enter Your Email')
    } else if (!emailRegex.test(email)) {
      setEmailError('Enter a Valid Email')
    }
    if (!password) {
      setPasswordError('Enter Your Password')
    } else if (!passwordRegex.test(password)) {
      setPasswordError(
        'Password must be at least 8 characters and include uppercase, lowercase, number, and special charecter'
      )
    }

    if (
      name &&
      email &&
      password &&
      emailRegex.test(email) &&
      passwordRegex.test(password)
    ) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          sendEmailVerification(auth.currentUser)
          toast.success('Verify Your Email')
          setTimeout(() => {
            navigate('/login')
          }, 1000)
        })
        .catch((error) => {
          const errorCode = error.code
          const errorMessage = error.message
        })
    }
  }


  const handleShowPassword = () => {
    setShowPasswordIcon(!showPasswordIcon)
    setShowPassword(showPassword==="password"?"text":"password")
  }

  return (
    <div>
      <section className="py-30">
        <ToastContainer />
        <Container>
          <Flex className="flex-col gap-y-15 md:gap-y-0 md:flex-row items-center">
            <div className="md:w-8/12 p-2 md:p-0 md:pr-4 lg:pr-10">
              <Image src={SignUpBanner} />
            </div>

            <div className="sm:w-7/12 md:w-4/12 p-2 md:p-0">
              <h4 className="font-medium md:text-3xl lg:text-4xl text-black font-inter">
                Create an account
              </h4>
              <p className="font-normal font-pop text-base text-black pt-6">
                Enter your details below
              </p>

              <Input
                onChange={handleName}
                type="text"
                placeholder="Name"
                className="w-full outline-none border-b border-[#00000066] md:mt-4 lg:mt-10"
              />
              <p className="text-xl pt-1 text-red-500">{nameError}</p>

              <Input
                onChange={handleEmail}
                type="text"
                placeholder="Email or Phone Number"
                className="w-full outline-none border-b border-[#00000066] md:mt-4 lg:mt-10"
              />
              <p className="text-xl pt-1 text-red-500">{emailError}</p>

              <div className='relative'>
                <Input
                onChange={handlePassword}
                type={showPassword}
                placeholder="Password"
                className="w-full outline-none border-b border-[#00000066] md:mt-4 lg:mt-10"
              />
              <div onClick={handleShowPassword} className='cursor-pointer absolute top-[60%] right-0'>
                {
                  showPasswordIcon?<IoEyeOutline className='text-2xl'/>:<IoEyeOffOutline className="text-2xl"  />
                }


              </div>
              </div>
              <p className="text-xl pt-1 text-red-500">{passwordError}</p>

              <div className="mt-10 ">
                <div onClick={handleCreateAccount}>
                  <Button text="Create Account" className="w-full" />
                </div>

                <div className="border border-[#00000066] w-full py-4 mt-4 mb-8 flex justify-center items-center gap-x-3">
                  <FcGoogle className="text-2xl" />
                  <button className=" text-base font-pop font-normal text-black ">
                    {' '}
                    Sign up with Google
                  </button>
                </div>
                <p className="font-pop text-base font-normal text-[#00000070]">
                  Already have account?{' '}
                  <span className="font-medium text-black underline pl-2 cursor-pointer">
                    Log in
                  </span>
                </p>
              </div>
            </div>
          </Flex>
        </Container>
      </section>
    </div>
  )
}

export default SignUp
