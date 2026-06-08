import React from 'react'
import Container from '../components/Container'
import ListItem from '../components/ListItem'
import { Link } from 'react-router-dom'
import Flex from '../components/Flex'

const Cart = () => {
  return (
    <section className='pb-35'>
      <Container>
        <div className='py-20'>
            <ul className="flex gap-x-2">
              <Link to="/">
                <ListItem text="Home" />
              </Link>
              /
              <ListItem text="Cart" />
            </ul>
          </div>
      </Container>
    </section>
  )
}

export default Cart
