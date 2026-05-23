import React from 'react'
import Container from '../components/Container'
import SubTitle from '../components/SubTitle'
import Title from '../components/Title'
import Grid from '../components/Grid'
import Image from '../components/Image'
import ArrivalCard1 from '../assets/arrivalcard1.png'
import ArrivalCard2 from '../assets/arrivalcard2.png'
import ArrivalCard3 from '../assets/arrivalcard3.png'
import ArrivalCard4 from '../assets/arrivalcard4.png'

const NewArrival = () => {
  return (
    <section>
      <Container>
        <SubTitle text="Featured" />
          <Title text="New Arrival" className="pt-5 pb-15" />

          <Grid className="grid-cols-2 gap-x-7.5">
            <div className="max-w-142.5">
              <Image src={ArrivalCard1} />
            </div>

            <div>
              <Grid className="grid-cols-2 gap-7.5">
                <div className="col-span-2 max-w-142.5">
                  <Image src={ArrivalCard2} />
                </div>

                <div className="max-w-67.5">
                  <Image src={ArrivalCard3} />
                </div>

                <div className="max-w-67.5">
                  <Image src={ArrivalCard4} />
                </div>
              </Grid>
            </div>
          </Grid>
      </Container>
    </section>
  )
}

export default NewArrival
