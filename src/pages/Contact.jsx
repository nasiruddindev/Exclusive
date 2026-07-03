import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import ListItem from '../components/ListItem'
import { HiOutlinePhone } from 'react-icons/hi'
import { MdOutlineEmail } from 'react-icons/md'
import { Link } from 'react-router-dom'
import Input from '../components/Input'
import Button from '../components/Button'
import { useSelector } from 'react-redux'

const Contact = () => {
  let data = useSelector((state) => state.breadcrumb.previousvalue)
  let data2 = useSelector((state) => state.breadcrumb.secPreviousvalue)
  return (
    <div>
      <section className="py-20 md:py-30">
        <Container>
          <div className="pl-5 md:pl-0">
            <ul className="flex gap-x-2">



              <Link to={`${data2 === 'home' ? '/' : `/${data2}`}`}>
                <ListItem text={data2} />
              </Link>
              /
              <Link to={`${data === 'home' ? '/' : `/${data}`}`}>
                <ListItem text={data} />
              </Link>{' '}
              /
              <ListItem text="Contact" />


              
            </ul>
          </div>

          <Flex className="mt-10 md:mt-20 flex-col md:flex-row gap-y-5 md:gap-y-0 items-center">
            <div className="md:w-4/12">
              <div className="max-w-[320px] shadow md:shadow-2xl py-10 lg:py-13 md:px-4 lg:px-8">
                <div className="flex items-center gap-x-3">
                  <div className="bg-red-600 p-1 rounded-full">
                    <HiOutlinePhone className="text-white text-base" />
                  </div>
                  <h4 className="text-base font-pop font-medium text-black">
                    Call To Us
                  </h4>
                </div>

                <p className="font-pop font-normal text-sm text-black pt-6 pb-4">
                  We are available 24/7, 7 days a week.
                </p>
                <p className="font-pop font-normal text-sm text-black  pb-8 border-b border-[#00000070]">
                  Phone: +8801611112222
                </p>

                <div className="flex items-center gap-x-3 mb-6 mt-8">
                  <div className="bg-red-600 p-1 rounded-full">
                    <MdOutlineEmail className="text-base text-white" />
                  </div>
                  <h4 className="text-base font-pop font-medium text-black">
                    Write To Us
                  </h4>
                </div>

                <p className="font-pop font-normal text-sm text-black">
                  Fill out our form and we will contact you within 24 hours.
                </p>
                <p className="font-pop font-normal text-sm text-black  py-4">
                  Emails: customer@exclusive.com
                </p>
                <p className="font-pop font-normal text-sm text-black">
                  Emails: support@exclusive.com
                </p>
              </div>
            </div>

            <div className="md:w-8/12">
              <div className="shadow-2xl px-4 xl:px-8 py-10">
                <div className="flex flex-wrap  gap-y-5  gap-x-4">
                  <Input
                    type="text"
                    placeholder="Your Name"
                    className="max-w-56.75 bg-input outline-none rounded"
                  />

                  <Input
                    type="email"
                    placeholder="Your Email"
                    className="max-w-56.75 bg-input outline-none rounded"
                  />

                  <Input
                    type="text"
                    placeholder="Your Phone"
                    className="max-w-56.75 bg-input outline-none rounded"
                  />
                </div>
                <textarea
                  placeholder="Your Massage"
                  className="bg-input mt-8 w-full h-45 rounded p-2"
                ></textarea>
                <div className="text-end mt-8">
                  <Button text="Send Massage" />
                </div>
              </div>
            </div>
          </Flex>
        </Container>
      </section>
    </div>
  )
}

export default Contact
