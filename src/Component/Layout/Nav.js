import * as React from 'react';
import { AppBar, Box, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography, Button, } from '@mui/material';
import '../../Styles/Layout.scss'
import PropTypes from 'prop-types';
import CssBaseline from '@mui/material/CssBaseline';
import MenuIcon from '@mui/icons-material/Menu';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../../App'
import { BsFacebook } from 'react-icons/bs';
import { FiMail } from 'react-icons/fi';
import { Link } from "react-router-dom";


// 手機側邊欄寬度
const drawerWidth = 240;
const mobileNav = ['解決方案', '合作夥伴', '關於Wizon', 'English/中文'];
// Web NavItems

const rightItems = [
  {
    name: "關於Wizon",
    link: "/about",
  },
  {
    name: <BsFacebook className='icon' />,
    link: "",
  },
  {
    name: <FiMail className='icon' />,
    link: "",
  },
  {
    name: 'English/中文',
    link: "",
  }
]

const leftItems = [
  {
    name: "解決方案",
    link: "/solution",
  },
  {
    name: '合作夥伴',
    link: "",
  }
]

function Nav(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  // 手機版側邊欄
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Box className='mobileLogo' sx={{ my: 2, width: 240, height: 60, px: 2 }}>
        <img src="/Images/Logo.png" alt="" />
      </Box>
      <Divider />
      <List>
        {mobileNav.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex' }} justifyContent="center"
      >
        <CssBaseline />
        <AppBar component="nav" sx={{ height: 80 }} >
          <Toolbar className='topNav'>
            {/* nav 左邊 */}
            <div className='leftNav'>
              <Link to={'/'} className='logoWrap'>
                <img src="/Images/Wizon.png" alt="Logo" />
              </Link>
              <Box
                className='itemsWrap'
                sx={{ display: { xs: 'none', sm: 'none', md: 'flex' } }}>
                {leftItems.map((item) => (
                  <Link to={item.link} key={item.name}>
                    <Button
                      className='itemBtn'
                      color="textBlack"
                      key={item.name}>
                      {item.name}
                    </Button>
                  </Link>
                ))}
              </Box>
            </div>
            {/* nav 右邊 */}
            <Box className='itemsWrap rightItemsWrap' sx={{ display: { xs: 'none', sm: 'none', md: 'flex' } }}>
              {rightItems.map((item) => (
                <Link to={item.link} >
                  <Button
                    className='itemBtn'
                    color="textBlack"
                    key={item.name}
                  >
                    {item.name}
                  </Button>
                </Link>
              ))}
            </Box>
            {/* 手機版漢堡Icon */}
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { md: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>

        {/* 手機版 */}
        <Box component="nav">
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: 'block', sm: 'block', md: 'none' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

Nav.propTypes = {
  window: PropTypes.func,
};

export default Nav;