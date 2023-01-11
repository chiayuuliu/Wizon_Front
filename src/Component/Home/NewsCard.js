import React from 'react'
import { useNavigate } from "react-router-dom";


const NewsCard = ({ title, typeIcon, redirect, description, id }) => {
  const navigate = useNavigate();
  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className='newsCard'
      onClick={() => {
        if (redirect) {
          openInNewTab(redirect)
        } else {
          navigate(`/news/${id}`);
        }
      }}>
      <div className="typeImg">
        <img src={typeIcon} alt="" />
      </div>
      <div className="article"
        onClick={(e) => {
          e.stopPropagation()
        }}>
        <h3 className="cardTitle">{title}</h3>
        <p>
          {description.substring(0, 50) + `...`}
        </p>
      </div>
      <button className='viewmoreBtn'
        onClick={() => {
          navigate(`/news/${id}`);
          if (redirect) {
            openInNewTab(redirect)
          } else {
            navigate(`/news/${id}`);
          }
        }}>
        More
      </button>
    </div>
  )
}

export default NewsCard