import React, { useState, useEffect } from "react";
import { getRequest } from "../api/index";

export const Context = React.createContext()

export const ContextProvider = ({ children }) => {

  const [onCartPage, setOnCartPage] = useState(false)
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])
  const [filter, setFilter] = useState(null);
  const [sort, setSort] = useState("default")
  const [product, setProduct] = useState({})
  const [productsInCart, setProductsInCart] = useState([]);
  const [modal, setModal] = useState(false)
  const [review, setReview] = useState(false)
  const [countProduct, setCountProduct] = useState(1)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    getRequest().then((res) => {
      setProducts(res)
      setCategories(res.reduce((acc, cur) => {
        return !acc.includes(cur.category) ? [...acc, cur.category] : acc
      }, []))
    });
    setLoading(false)
  }, [])

  const addProductToCart = (event, item) => {
    setProductsInCart(prev => (!prev.some(prod => prod.id === item.id) ? [...prev, { ...item, count: 1, totalPrice: item.price }] : prev))
    event.stopPropagation()
  }

  return (
    <Context.Provider value={{
      onCartPage, review, setReview, modal, loading, setModal, setOnCartPage, countProduct, setCountProduct, categories, products, filter, setFilter, sort, setSort, product, setProduct, productsInCart, setProductsInCart, addProductToCart
    }}>
      {children}
    </Context.Provider>
  )
}

