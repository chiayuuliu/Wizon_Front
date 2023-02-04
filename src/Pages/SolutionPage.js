import React, { useState, useEffect } from 'react'
import { Container, Box, Typography } from '@mui/material/';
import SolutionCard from '../Component/Solution/SolutionCard';
import api from '../api/api';
import Slide from 'react-reveal/Slide';

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
          <Typography variant="h5" component="h2"
            sx={{ textAlign: 'center', lineHeight: "40px" }}>
            我們的任務是提供資安睿智化服務為目標,
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ textAlign: 'center', mb: 4 }}>
            ”平台”為核心，作為用戶與 資安解決方案 之間的專家顧問
          </Typography>
          {products.map((v) => {
            return (
              <Slide bottom>
                <SolutionCard
                  key={v.id}
                  title={v.name}
                  ID={v.id}
                  description={v.description}
                  // img={v.file_link}
                  img='https://cuhkintouch.cpr.cuhk.edu.hk/wp-content/uploads/2020/12/20201217_ICT-Awards01-scaled.jpg'
                />
              </Slide>
            )
          })}
        </Container>
      }
    </div>
  )
}

export default SolutionPage