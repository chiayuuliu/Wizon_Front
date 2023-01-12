import React from 'react'
import { Container} from '@mui/material/';

const Footer = () => {
  return (
    <footer>
      <Container>
        <div className="footerWrap">
          <p className="copyright">
            Copyright&copy; 2022 Wizon.All right
          </p>
          <div className="linkItems">
            <ul>
              <li>關於我們</li>
              <li>聯絡我們</li>
              <li>加入我們</li>
            </ul>
            <ul>
              <li>隱私政策</li>
              <li>使用政策</li>
            </ul>
            <ul>
              <li>social Link</li>
              {/* <li>Facebook</li> */}
            </ul>
          </div>
        </div>
      </Container>
    </footer>

  )
}

export default Footer