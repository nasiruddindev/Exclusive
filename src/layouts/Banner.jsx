import React from 'react'
import Container from '../components/Container'
import BannerList from '../components/BannerList'
import Flex from '../components/Flex'
import Image from '../components/Image'
import BannerImg from '../assets/banner.jpg'

const Banner = () => {
  return (
    <section>
      <Container>
        <Flex className="mb-20 md:mb-35 flex-col-reverse md:flex-row px-2">


          <div className="md:w-3/12">
            <ul className="flex flex-col  gap-y-4 px-10 md:border-r border-black/50 md:mr-6 lg:mr-13 md:pt-5 lg:pt-10 pt-10  md:px-4 lg:px-0 lg:pr-4">
              <BannerList text="Woman’s Fashion" type={true} />

              <BannerList text="Men’s Fashion" type={true} />

              <BannerList text="Electronics" />

              <BannerList text="Home & Lifestyle" />

              <BannerList text="Medicine" />

              <BannerList text="Sports & Outdoor" />

              <BannerList text="Baby & Toys" />

              <BannerList text="Groceries & Pets" />

              <BannerList text="Health & Beauty" />
            </ul>
          </div>

          <div className="md:w-9/12 pt-5  md:pt-10">
            <Image src={BannerImg} />
          </div>
        </Flex>
      </Container>
    </section>
  )
}

export default Banner
