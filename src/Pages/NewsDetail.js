import React, { useState, useEffect } from 'react'
import { Container } from '@mui/material/';
import { useParams } from "react-router-dom";
import api from '../api/api';

const NewsDetail = () => {
  const [loading, setLoading] = useState(true)
  const { newsID } = useParams();
  const [content, setContent] = useState("")
  // URL
  const newsDetailURL = `/fs/news/${newsID}`

  useEffect(() => {
    getNewsDetail()
  }, [])

  const getNewsDetail = async () => {
    setLoading(true)
    try {
      const res = await api.get(newsDetailURL);
      if (res.data.status) {
        console.log(res.data.data)
        setContent(res.data.data.content)
      }
    } catch (err) {
      console.log(err)
    } finally {
      setLoading(false)
    }
  };


  return (
    <div className="Page ">
      {loading ||
        <Container>
          {content}
        </Container>
      }
    </div>
  )
}

export default NewsDetail