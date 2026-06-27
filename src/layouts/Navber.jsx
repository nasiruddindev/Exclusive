import React, { useEffect, useRef, useState } from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import Logo from '../assets/logo.png'
import ListItem from '../components/ListItem'
import Button from '../components/Button'
import { IoSearch } from 'react-icons/io5'
import { FaRegHeart } from 'react-icons/fa'
import { BsCart3 } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../slices/addToCartSlice'

const Navber = ({id}) => {
  let [allData, setAllData] = useState([])
  let [search, setSearch] = useState([])
  let [input, setInput] = useState([])
  let [open, setOpen] = useState(false)
  let [total, setTotal] = useState('')

  // Api Data fetch start
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setAllData(data))
  }, [])
  // Api Data fetch end

  // Search Box Function Start
  function searchandle(e) {
    setInput(e.target.value)
    let search = allData.filter((item) =>
      item.title.toLowerCase().includes(e.target.value.toLowerCase())
    )
    setSearch(search)
  }
  // Search Box Function end

  // All Product Pricing Start
  let data = useSelector((state) => state.cart.value)

  useEffect(() => {
    let total = 0
    data.map((item) => {
      total += item.quantity * item.price
    })
    setTotal(total)
  }, [data])
  // All Product Pricing end

  let dispatch = useDispatch()

  let handelIncrement = (item) => {
    dispatch(increment(item))
  }
  let handelDecrement = (item) => {
    dispatch(decrement(item))
  }

  // Search Box hide with outside click function start

  const [showSearch, setShowSearch] = useState(false);
  const searchRef = useRef(null);


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target)
      ) {
        setShowSearch(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  // Search Box and Cart box hide with outside click function end


  // Cart box hide with outside click function start
  const [cartOpen, setCartOpen] = useState(false);
  const cartRef = useRef(null);

  useEffect(() => {
  const handleClickOutside = (e) => {
    if (
      searchRef.current &&
      !searchRef.current.contains(e.target)
    ) {
      setOpen(false);
    }

    if (
      cartRef.current &&
      !cartRef.current.contains(e.target)
    ) {
      setCartOpen(false);
    }
  };

  document.addEventListener("mousedown", handleClickOutside);

  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, []);
  // Cart box hide with outside click function end

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

          <div  className="relative w-4/12 flex  items-center gap-x-2 pl-20">
            <div
            ref={searchRef}
            className="relative flex items-center justify-between bg-input py-2 px-3 w-60">
              <input
                value={input}
                onChange={searchandle}
                onFocus={() => setShowSearch(true)}
                type="text"
                placeholder="What are you looking for"
                className="placeholder:text-xs placeholder:text-[#00000080] outline-none"
              />
              {search.length > 0 && input.length > 0 && showSearch && (
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
                onClick={() => setCartOpen(!cartOpen)}
                className="text-xl cursor-pointer"
              />

              {cartOpen && (
                <div ref={cartRef} className="overflow-y-scroll z-50 absolute top-14 right-0 h-screen w-full bg-input px-4 py-6">
                  <ul className="flex  border-b pb-4 ">
                    <li className='w-1/5 text-center'>Product</li>
                    <li className='w-1/5 text-center'>Image</li>
                    <li className='w-1/5 text-center'>Quantity</li>
                    <li className='w-1/5 text-center'>Price</li>
                    <li className='w-1/5 text-center'>Total</li>
                  </ul>

                  {data.map((item) => (
                    <ul className="flex items-center pt-5 ">

                      <li className="w-1/5 text-center">
                        {item.title.substring(0, 20)}
                      </li>
                      
                      <li className="w-1/5">
                        {' '}
                        <Image className="w-full" image={item.src} />{' '}
                      </li>
                      <li className="w-1/5 h-10 text-center border border-black/40 flex justify-between px-2 rounded-md">
                        <button
                        onClick={() => handelDecrement(item)}
                        className="cursor-pointer">-</button>

                        <button>{item.quantity}</button>

                        <button
                          onClick={() => handelIncrement(item)}
                          className="cursor-pointer"
                        >
                          +
                        </button>
                      </li>
                      <li className="w-1/5 text-center">{item.price}$</li>
                      <li className="w-1/5 text-center">
                        {item.price * item.quantity}$
                      </li>
                    </ul>
                  ))}

                  {data.length > 0 ? (
                    <div className='py-5  border-t mt-10'>
                      <p className="text-2xl px-2 font-inter font-medium text-end ">
                        Total : {Math.floor(total)}$
                      </p>
                      <div>
                        <div >
                        <Link to="/checkout">
                        <Button className="w-full mt-5" text="Check Out"/>
                        </Link>
                      </div>
                      </div>
                    </div>
                  ) : (
                    <p className="text-3xl font-inter text-black/70 font-semibold text-center py-5 ">
                      No data
                    </p>
                  )}
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
