import React, { useState } from 'react'
import { Container, Box, Grid, Paper, TextField } from '@mui/material/';
import { styled } from '@mui/material/styles';
import Swal from 'sweetalert2'
import Title from '../Component/All/Title';
import VedioTest from '../Component/About/Video'
import '../Styles/About.scss'
import Spinner from '../Component/Spinner';
import api from '../api/api';
import Slide from 'react-reveal/Slide';

const AboutPage = () => {
  // 建立loading
  const [createLoading, setCreateLoading] = useState(false)
  // 聯絡資訊
  const [contactInfo, setContactInfo] = useState({
    company_name: "",
    name: "",
    phone: "",
    email: "",
    content: "",
  });
  // 輸入框
  const inputs = [
    {
      name: "company_name",
      label: "公司名稱(選填)",
      type: "text",
      required: false,
    },
    {
      name: "name",
      label: "姓名(Name)",
      type: "text",
      required: true,
    },
    {
      name: "email",
      label: "郵件(Email)",
      type: "email",
      required: true,
    },
    {
      name: "phone",
      label: "聯絡電話(Phone)",
      type: "text",
      required: true,
    },
  ]
  // URL
  const addContactURL = `/fs/contact`

  // 送出建立資訊
  const handleCreateContact = async (e) => {
    e.preventDefault();
    console.log(contactInfo)
    setCreateLoading(true)
    try {
      const res = await api.post(addContactURL, JSON.stringify({
        contactInfo
      }));
      if (res.data.status) {
        console.log(res.data)
        Swal.fire({
          text: "新增成功",
          showConfirmButton: false,
          timer: 1000,
        })
      }
    } catch (err) {
      console.log(err)
      const errorCode = err.response.status;
      const errMsg = err.response.data.data.error_code;
      console.log(errorCode, errMsg);
      // ErrorMsg(errorCode, errMsg)

    } finally {
      setCreateLoading(false)
    }
  }


  // 新增聯絡內容
  const onAddContact = (e) => {
    console.log(e.target.name, e.target.value)
    setContactInfo({ ...contactInfo, [e.target.name]: e.target.value });
  }

  return (
    <div className="Page aboutPage">
      <Container>
        {/* 公司簡介 */}
        <Slide bottom>
          <Title
            title='公司簡介'
          />
          <div className="introductionWrap">
            <p className='introduction'>懷生數位（WIZON Digital Corp.) 成立2022年, 來自資安產業實務專家所組成新創公司, 以自有研發資安系統平台, 結合資安專家團隊(People), 關鍵技術(Technologies)及自動化流程(Process), 提供新世代MSSP (Managed Security Service Platform) 服務, 為企業建立睿智化,效率化的資安治理方針及專家諮詢.</p>
            <div className="introductionImg">
              <img src="https://picsum.photos/id/60/300/350" alt="" />
            </div>
          </div>
        </Slide>

        {/* 影片介紹 */}
        <Slide bottom>
          <Title
            title='介紹影片'
          />
          <VedioTest embedId="Ey_90l9GaAw" />
        </Slide>
        <Slide bottom>

          <Title
            title='聯絡我們'
          />
          <div className="contactWrap">
            <form action="" onSubmit={handleCreateContact}>
              <div className="infoWrap">
                {inputs.map((v) => {
                  return (
                    <input
                      key={v.name}
                      required={v.required}
                      name={v.name} type={v.type}
                      placeholder={v.label}
                      onChange={(e) => {
                        onAddContact(e)
                      }}
                    />
                  )
                })}
              </div>
              <textarea
                placeholder='留下訊息(your message)'
                name="content" id="" cols="30" rows="10"
                onChange={(e) => {
                  onAddContact(e)
                }}>
              </textarea>
              <input type="submit" value={'送出'} />
            </form>
          </div>
        </Slide>
      </Container>
    </div>
  )
}

export default AboutPage