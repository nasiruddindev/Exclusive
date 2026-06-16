import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Pagination from '../components/Pagination'

const Products = () => {
  return (
    <section>
      <Container>
        <Flex>
          <div className='w-3/12'>
          pagination
          </div>


          <div className='w-9/12'>

            <Pagination itemsPerPage={4} />

          </div>
        </Flex>
      </Container>
    </section>
  )
}

export default Products
