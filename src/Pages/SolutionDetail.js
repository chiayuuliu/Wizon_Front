import React, { useEffect, useState } from 'react'
import { Container, Box } from '@mui/material/';
import Title from '../Component/All/Title';
import { useParams } from "react-router-dom";
import '../Styles/Solution.scss'
import api from '../api/api';
import Spinner from '../Component/Spinner';
import FAQs from '../Component/Solution/FAQs'

const SolutionDetail = () => {
  const [loading, setLoading] = useState(false)
  const [introduction, setIntroduction] = useState("")
  const [customer, setCustomer] = useState("")
  const [productbenefit, setProductbenefit] = useState("")
  const [faqList, setFaqList] = useState([])


  const { solutionID } = useParams();
  // console.log(!!'')

  const solutionDetailURL = `/fs/products/${solutionID}`

  useEffect(() => {
    getProductsDetail()
  }, [])

  const getProductsDetail = async () => {
    setLoading(true)
    try {
      const res = await api.get(solutionDetailURL);
      if (res.data.status) {
        console.log(res.data.data.detail)
        setIntroduction(res.data.data.detail.introduction)
        setCustomer(res.data.data.detail.customers)
        setProductbenefit(res.data.data.detail.benefit)
        setFaqList(res.data.data.detail.faqs)
        // setProducts(res.data.data.response)
      }
    } catch (err) {
      console.log(err)
    } finally {
      setLoading(false)
    }
  };

  return (
    <div className="Page solutionDetailPage">
      {loading && <Spinner />}
      {loading ||
        <Container>
          <Title
            title={'服務介紹'}
          />
          <div className="content">
            <p>{introduction ? introduction : "loading..."}</p>
          </div>
          <Title
            title={'適用客群'}
          />
          <div className="content">
            <p>{customer ? customer : "loading..."}</p>
          </div>
          <Title
            title={'服務效益'}
          />
          <div className="content">
            <p>{productbenefit ? productbenefit : "loading..."}</p>
          </div>
          <Title
            title={'FAQ'}
          />
          <FAQs
            faqList={faqList}
          />

        </Container>
      }
    </div>
  )
}

export default SolutionDetail