import React, { useState, useEffect } from 'react'
import { Container, Box } from '@mui/material/';
import SolutionCard from '../Component/Solution/SolutionCard';
import api from '../api/api';

const SolutionPage = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const solutionURL = `/fs/products`

  useEffect(() => {
    getProducts()
  }, [])


  const getProducts = async () => {
    setLoading(true)
    try {
      const res = await api.get(solutionURL);
      if (res.data.status) {
        console.log(res.data.data.response)
        setProducts(res.data.data.response)
      }
    } catch (err) {
      console.log(err)
    } finally {
      setLoading(false)

    }
  };

  return (
    <div className="Page solutionPage">
      {loading ||
        <Container>
          {products.map((v) => {
            return (
              <SolutionCard
                // key={v.id}
                title={v.name}
                id={v.id}
                img={v.file_link}
              />
            )
          })}
        </Container>
      }
    </div>
  )
}

export default SolutionPage