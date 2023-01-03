import React from 'react'
import Button from '@mui/material/Button';
const SolutionCard = ({ title, img, ID }) => {

  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };
  return (
    <div className='Card solutionCard'>
      <img src={img} alt='Cover' />
      <div className="cardTitle">{title}</div>
      <Button
        // disabled={!redirect}
        className='viewmoreBtn'
        size="medium"
        variant="outlined"
        onClick={() => {
          // console.log(!redirect)
          // if (redirect) {
          //   openInNewTab(redirect)
          // }
        }}
      >
        完整內容...
      </Button>
    </div>
  )
}

export default SolutionCard