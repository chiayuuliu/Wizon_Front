// import './App.css';
import { Route, Routes } from "react-router-dom";
import { createTheme } from '@mui/material/styles';

import Layout from './Component/Layout/Layout';
import Home from './Pages/Home';
import AboutPage from './Pages/AboutPage';
import SolutionPage from "./Pages/SolutionPage";
import SolutionDetail from "./Pages/SolutionDetail";
import NewsDetail from "./Pages/NewsDetail";
import ScrollToTop from "./Component/ScrollToTop";
// 顏色設定for MUI
export const theme = createTheme({
  palette: {
    // 背景白
    primary: {
      main: '#FFFFFF',
    },
    // 主黃色
    secondary: {
      main: '#F8B62D',
    },
    // 深黑字
    textBlack: {
      main: '#544949',
    },

  },
});
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/news/:newsID" element={<NewsDetail />} />
        <Route path="/solution" element={<SolutionPage />} />
        <Route path="/solution/:solutionID" element={<SolutionDetail />} />
      </Route>
    </Routes>
  );
}

export default App;
