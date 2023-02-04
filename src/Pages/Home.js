import React, { useEffect, useState } from 'react'
import Fade from 'react-reveal/Fade';
import '../Styles/Home.scss'
import Banner from '../Component/Home/Banner'
import { Container, Box, Typography } from '@mui/material/';
import Title from '../Component/All/Title';
import NewsCard from '../Component/Home/NewsCard';
import api from '../api/api';
import Spinner from '../Component/Spinner';
const Home = () => {
  const [loading, setLoading] = useState(false)
  const [bannerList, setBannerList] = useState([])
  const [newsList, setNewsList] = useState([])

  // URL
  const BannerURL = `/fs/banners`;
  const NewsURL = `/fs/news`;

  console.log(bannerList.length > 0)
  useEffect(() => {
    getBanner()
    getNews()
  }, [])

  const getBanner = async () => {
    setLoading(true)
    try {
      const res = await api.get(BannerURL);
      if (res.data.status) {
        // console.log(res.data.data)
        setBannerList(res.data.data)
      }
    } catch (err) {
      console.log(err)
    }
  };

  const getNews = async () => {
    try {
      const res = await api.get(NewsURL);
      if (res.data.status) {
        console.log(res.data.data.response)
        setNewsList(res.data.data.response)
      }
    } catch (err) {
      console.log(err)
    }
    finally {
      setLoading(false)
    }
  };


  return (
    <div className="Page">
      {loading && <Spinner />}
      {loading ||
        <>
          <Banner
            bannerList={bannerList}
          />
          <Container>
            <Typography variant="h5" component="h2"
              sx={{ textAlign: 'center', lineHeight: "50px" }}>
              Security in Wise
            </Typography>
            <Typography variant="h5" component="h2"
              sx={{ textAlign: 'center', lineHeight: "50px" }}>
              睿智化資安
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{ textAlign: 'center', mt: 2, mb: 4 }}>
              教練式資安專家顧問(Coacher & Consulting)之智能化方案, 為企業提供永續營運(Sustainability)為後盾.
            </Typography>
            <Box sx={{ minHeight: '100vh' }}>
              <Title
                title="最新消息"
              />
              {newsList.map((v) => {
                return (
                  <Fade bottom>
                    <NewsCard
                      key={v.id}
                      redirect={v.redirect}
                      description={v.description}
                      title={v.title}
                      id={v.id}
                      typeIcon={v.type_link}
                    />
                  </Fade>
                )
              })}
            </Box>
          </Container>
        </>
      }
    </div>
  )
}

export default Home