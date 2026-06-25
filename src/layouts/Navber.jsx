import React, { useEffect, useState } from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import Logo from '../assets/logo.png'
import ListItem from '../components/ListItem'
import { IoSearch } from 'react-icons/io5'
import { FaRegHeart } from 'react-icons/fa'
import { BsCart3 } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navber = () => {
  let [allData, setAllData] = useState([])
  let [search, setSearch] = useState([])
  let [input, setInput] = useState([])
  let [open, setOpen] = useState(false)

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setAllData(data))
  }, [])

  function searchandle(e) {
    setInput(e.target.value)
    let search = allData.filter((item) =>
      item.title.toLowerCase().includes(e.target.value.toLowerCase())
    )
    setSearch(search)
  }

  let data = useSelector((state) => state.cart.value)

  return (
    <nav className="pt-10 pb-4 border-b border-black">
      <Container>
        <Flex className="items-center">
          <div className="w-3/12">
            <Image src={Logo} />
          </div>

          <div className="w-5/12">
            <ul className="flex gap-x-12">
              <Link to="/">
                <ListItem text="Home " />
              </Link>
              <Link to="/contact">
                <ListItem text="Contact" />
              </Link>
              <Link to="/about">
                <ListItem text="About " />
              </Link>
              <Link to="/signup">
                <ListItem text="Sign Up " />
              </Link>
            </ul>
          </div>

          <div className="relative w-4/12 flex  items-center gap-x-2 pl-20">
            <div className="relative flex items-center justify-between bg-input py-2 px-3 w-60">
              <input
                value={input}
                onChange={searchandle}
                type="text"
                placeholder="What are you looking for"
                className="placeholder:text-xs placeholder:text-[#00000080] outline-none"
              />
              {search.length > 0 && input.length > 0 && (
                <div className="absolute top-14 left-0 w-full  bg-linear-to-r from-black/70 to-black rounded p-5 z-10">
                  {search.map((item, index) => (
                    <ul>
                      <Link
                        to={`/productdetails/${item.id}`}
                        onClick={() => {
                          setInput(item.title)
                          setSearch([])
                        }}
                      >
                        <li className="text-white text-xl font-semibold py-2">
                          {item.title}
                        </li>
                      </Link>
                    </ul>
                  ))}
                </div>
              )}

              <IoSearch className="text-base" />
            </div>
            <div className="flex items-center gap-x-3">
              <FaRegHeart className="text-xl" />

              <BsCart3
                onClick={() => setOpen(!open)}
                className="text-xl cursor-pointer"
              />

              {open && (
                <div className="overflow-y-scroll z-50 absolute top-15 right-0 h-screen w-full bg-input px-4 py-6">
                  <ul className="flex justify-between border-b pb-4 ">
                    <li>Product</li>
                    <li>Image</li>
                    <li>Quantity</li>
                    <li>Price</li>
                    <li>Total</li>
                  </ul>

                  {data.map((item) => (
                    <ul className="flex justify-between pt-5 ">
                      <li className="w-1/5 text-center">
                        {item.title.substring(0, 20)}
                      </li>
                      <li className="w-1/5"> <Image className="w-full" image={item.src}/> </li>
                      <li className="w-1/5 text-center border border-black/40 flex justify-between px-2 rounded-md">
                        <button className="cursor-pointer">-</button>
                        <button>{item.quantity}</button>
                        <button className="cursor-pointer">+</button>
                      </li>
                      <li className="w-1/5 text-center">{item.price}</li>
                      <li className="w-1/5 text-center">
                        {item.price * item.quantity}
                      </li>
                    </ul>
                  ))}

                  <div><p className='text-3xl py-5 px-2 font-inter font-semibold text-end border-t mt-10'>Total:{}</p></div>
                </div>
              )}
            </div>
          </div>
        </Flex>
      </Container>
    </nav>
  )
}

export default Navber

