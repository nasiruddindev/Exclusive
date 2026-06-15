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

const Navber = () => {
  let [allData, setAllData] = useState([])
  let [search, setSearch] = useState([])
  let [input, setInput] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setAllData(data))
  }, [])

  function searchandle(e){
    setInput(e.target.value)
    let search = allData.filter((item)=>item.title.toLowerCase().includes(e.target.value.toLowerCase()))
    setSearch(search)
  }

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

          <div className="w-4/12 flex items-center gap-x-2">
            <div className="relative flex items-center justify-between bg-input py-2 px-3 w-60">
              <input
                onChange={searchandle}
                type="text"
                placeholder="What are you looking for"
                className="placeholder:text-xs placeholder:text-[#00000080] outline-none"
              />
              {
                search.length&&
                input.length &&
                <div className='absolute top-14 left-0 w-full  bg-red-500 rounded p-5 z-10'>
                {
                  search.map((item)=>(
                  <ul>
                    <Link to={`/productdetails/${item.id}`}
                    onClick={()=>{
                      setInput([])
                      setSearch([])
                    }}
                    ><li className='text-xl font-semibold py-2'>{item.title}</li></Link>
                  </ul>
                  ))
                }
              </div>

              }

              <IoSearch className="text-base" />
            </div>
            <div className="flex items-center gap-x-1">
              <FaRegHeart className="text-xl" />
              <BsCart3 className="text-xl" />
            </div>
          </div>
        </Flex>
      </Container>
    </nav>
  )
}

export default Navber
