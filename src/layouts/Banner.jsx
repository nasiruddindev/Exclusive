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
        <Flex className="mb-35">
          <div className="w-3/12">
            <ul className="flex flex-col gap-y-4 border-r border-black/50 mr-13 pt-10 pr-4">
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

          <div className="w-9/12 pt-10">
            <Image src={BannerImg} />
          </div>
        </Flex>
      </Container>
    </section>
  )
}

export default Banner
