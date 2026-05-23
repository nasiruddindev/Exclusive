import React from 'react'
import Container from '../components/Container'
import SubTitle from '../components/SubTitle'
import Flex from '../components/Flex'
import Title from '../components/Title'
import { IoMdArrowBack, IoMdArrowForward } from 'react-icons/io'
import Grid from '../components/Grid'
import CategoryList from '../components/CategoryList'
import { HiOutlineDevicePhoneMobile } from 'react-icons/hi2'
import { HiOutlineDesktopComputer } from 'react-icons/hi'
import { BsSmartwatch } from 'react-icons/bs'
import { IoCameraOutline } from 'react-icons/io5'
import { FiHeadphones } from 'react-icons/fi'
import { LuGamepad2 } from 'react-icons/lu'

const BrowseCategory = () => {
  return (
    <section>
      <Container>
        <SubTitle text="Categories" className="pt-20" />
          <Flex className="pt-5 pb-15 justify-between items-center">
            <div>
              <Title text="Browse By Category" />
            </div>

            <div className="flex gap-x-2 items-center">
              <div className="bg-input p-2 rounded-full">
                <IoMdArrowBack className="text-2xl" />
              </div>
              <div className="bg-input p-2 rounded-full">
                <IoMdArrowForward className="text-2xl" />
              </div>
            </div>
          </Flex>

          <Grid className="grid-cols-6 gap-x-7.5 pb-18 border-b border-black/30">
            <CategoryList
              text="Phones"
              icon={
                <HiOutlineDevicePhoneMobile className="text-[56px] group-hover:text-white" />
              }
            />

            <CategoryList
              text="Computers"
              icon={
                <HiOutlineDesktopComputer className="text-[56px] group-hover:text-white" />
              }
            />

            <CategoryList
              text="SmartWatch"
              icon={
                <BsSmartwatch className="text-[56px] group-hover:text-white" />
              }
            />

            <CategoryList
              text="Camera"
              icon={
                <IoCameraOutline className="text-[56px] group-hover:text-white" />
              }
            />

            <CategoryList
              text="HeadPhones"
              icon={
                <FiHeadphones className="text-[56px] group-hover:text-white" />
              }
            />

            <CategoryList
              text="Gaming"
              icon={
                <LuGamepad2 className="text-[56px] group-hover:text-white" />
              }
            />
          </Grid>
      </Container>
    </section>
  )
}

export default BrowseCategory
