import React from 'react'
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";


const SolutionCard = ({ title, img, ID, description }) => {
  console.log(description)
  const navigate = useNavigate();
  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className='Card solutionCard'>
      <img src={img} alt='Cover' />
      <div className="cardTitle">{title}</div>
      <p>{description}</p>
      <Button
        // disabled={!redirect}
        className='viewmoreBtn'
        size="medium"
        variant="outlined"
        onClick={() => {
          console.log(ID)
          navigate(`/solution/${ID}`);
        }}
      >
        完整內容...
      </Button>
    </div>
  )
}

export default SolutionCard