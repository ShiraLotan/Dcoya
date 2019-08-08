import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import dcoyaLogo from './img/dcoyaLogo.png';
import dashboard from './img/dashboard.png';
import campaign from './img/compass.png';
import insights from './img/mollecula.png';
import reporting from './img/clock.png';
import setting from './img/settings.png';
import templates from './img/templates.png';
import {useStyles} from './style';


import './Sidebar.css';
import Main from './main';

function Sidebar(props) {
  const classes = useStyles();

  const drawer = (
    <div className='drawer'>
      <div/>
        <div className='logoWrapper'>
        <img className='logo' src={dcoyaLogo} alt='#'/>
        <IconButton className='burgerWrapper'  edge="start"  color="inherit" aria-label="menu">
            <MenuIcon className='burgerMenu'/>
        </IconButton>
        </div>
      <List  className='listWrapper'>
        {['DASHBOARD','CAMPAIGNS','INSIGHTS', 'REPORTING'].map((text, index) => (
            <div key={index}>
          <ListItem className='topListItem' button key={index}>
            <ListItemIcon>{text==='DASHBOARD' ? <img className='icons' src={dashboard} alt='#'/> : (text==='CAMPAIGNS' ? <img className='icons' src={campaign} alt='#'/>:(text==='INSIGHTS' ? <img className='icons' src={insights} alt='#'/>:(text==='REPORTING' ? <img className='icons' src={reporting} alt='#'/>:null)))}</ListItemIcon>
            <ListItemText className='ListItem' primary={text} />
          </ListItem>
          <Divider className='divider'/>
          </div>
        ))}
      </List>
      <List className='secondPart'>
      <ListItem className='topListItem advantive' button >
            <ListItemIcon><img className='icons' src={setting} alt='#'/></ListItemIcon>
            ADVANTIVE 
            <ListItemText  />
          </ListItem>
        
        {['EVENTS', 'DEPLOYMENT', 'SETTINGS'].map((text, index) => (
          <ListItem  className='smallListItems'   button key={index}>
            <ListItemIcon>{text==='ADVANTIVE' ?  <img className='icons' src={setting} alt='#'/>: <img />}</ListItemIcon>
            <ListItemText  className={classes.root.MuiTypography}   primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider className='divider'/>

      <List className='templatesItem'>
          <ListItem   button >
            <ListItemIcon><img className='icons' src={templates} alt='#'/></ListItemIcon>
            <ListItemText  primary='Templates' />
          </ListItem>
        
      </List>
    </div>
  );

  return (
    <div >
      <CssBaseline />
      <AppBar className='topBar' >
        <div className='employee'><h1>EMPLOYEE</h1></div>
        <div className='employeeDcoya'><h5>DCOYA/Employee</h5></div>
      </AppBar>
      <nav >
        <Hidden smUp implementation="css" >
          <Drawer >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer 
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main >
      <div className={classes.toolbar} />
        <div className='mainCont'>
          <Main/>       
        </div>
      </main>
    </div>
  );
}



export default Sidebar;