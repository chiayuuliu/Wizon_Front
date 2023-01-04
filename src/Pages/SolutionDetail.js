import React, { useEffect, useState } from 'react'
import { Container, Box } from '@mui/material/';
import Title from '../Component/All/Title';
import { useParams } from "react-router-dom";
import '../Styles/Solution.scss'
import api from '../api/api';
import Spinner from '../Component/Spinner';

const SolutionDetail = () => {
  const [loading, setLoading] = useState(false)
  const { solutionID } = useParams();
  console.log(solutionID)

  const solutionDetailURL = `/fs/products/${solutionID}`

  useEffect(() => {
    getProductsDetail()
  }, [])

  const getProductsDetail = async () => {
    setLoading(true)
    try {
      const res = await api.get(solutionDetailURL);
      if (res.data.status) {
        console.log(res.data.data)
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
          <div className="content">
            <Title
              title={'服務介紹'}
            />
            <div className="content">
              <p>懷生數位（WIZON Digital Corp.) 成立2022年, 來自資安產業實務專家所組成新創公司, 以自有研發資安系統平台, 結合資安專家團隊(People), 關鍵技術(Technologies)及自動化流程(Process), 提供新世代MSSP (Managed Security Service Platform) 服務, 為企業建立睿智化,效率化的資安治理方針及專家諮詢.</p>
            </div>
          </div>

          <div className="content">
            <Title
              title={'服務介紹'}
            />
            <div className="content">
              <p>懷生數位（WIZON Digital Corp.) 成立2022年, 來自資安產業實務專家所組成新創公司, 以自有研發資安系統平台, 結合資安專家團隊(People), 關鍵技術(Technologies)及自動化流程(Process), 提供新世代MSSP (Managed Security Service Platform) 服務, 為企業建立睿智化,效率化的資安治理方針及專家諮詢.</p>
            </div>
          </div>
          <div className="content">
            <Title
              title={'服務介紹'}
            />
            <div className="content">
              <p>懷生數位（WIZON Digital Corp.) 成立2022年, 來自資安產業實務專家所組成新創公司, 以自有研發資安系統平台, 結合資安專家團隊(People), 關鍵技術(Technologies)及自動化流程(Process), 提供新世代MSSP (Managed Security Service Platform) 服務, 為企業建立睿智化,效率化的資安治理方針及專家諮詢.</p>
            </div>
          </div>

        </Container>
      }
    </div>
  )
}

export default SolutionDetail