import React, { useState } from 'react'
import {
    AppBar,
    Toolbar,
    ListItem,
    IconButton,
    ListItemText,
    Avatar,
    Divider,
    List,
    Typography,
    Box,
    ListItemIcon
} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import MobileRightMenuSlider from "@material-ui/core/Drawer";
import {
    ArrowBack,
    AssignmentInd,
    Home,
    Apps,
    ContactMail
} from "@material-ui/icons";
import {Link} from "react-router-dom";
import avatar from "../avatar.jpg"

// CSS styles
const useStyles = makeStyles(theme =>({
    nemuSliderContainer: {
        width: 250,
        background: "#511",
        height: "100%"
    },
    avatar: {
        display: "block",
        margin: "0.5rem auto",
        width: theme.spacing(13),
        height: theme.spacing(13)
    },
    listItem: {
        color: "tan"
    }
  })); 

  const menuItems = [
      {
          listIcon : <Home/>,
          listText : "Home",
          listPath: "/"
      },
      {
        listIcon : <AssignmentInd/>,
        listText : "Resume",
        listPath: "/resume"
      },
      {
        listIcon : <Apps/>,
        listText : "Portfolio",
        listPath: "/portfolio"
      },
      {
        listIcon : <ContactMail/>,
        listText : "Contacts",
        listPath: "/contacts"
      }
  ]

const Navbar = () => {
    const [state, setState] = useState({
        right: false
    })
    const togleSlider = (slider, open) => () => {
        setState ({ ...state, [slider]: open })
    }
    const classes = useStyles();
    const sideList = slider =>(
        <Box 
        className = {classes.nemuSliderContainer} 
        component = "div"
        onClick = {togleSlider("right", false)}
        >
          <Avatar className = {classes.avatar} src = {avatar} alt = "Avijit Goswami"/>
          <Divider/>
          <List>
              { menuItems.map((lsItem, key) => (
                  <ListItem button key = {key} component={Link} to={lsItem.listPath}>
                    <ListItemIcon className = { classes.listItem }>{ lsItem.listIcon }</ListItemIcon>
                    <ListItemText className = { classes.listItem } primary = { lsItem.listText }/>
                  </ListItem>
              ) ) }
              
          </List>
        </Box>
    )
    return (
        <>
        <Box component = "nav">
            <AppBar position = "static" style = {{ background : "#222" }}>
                <Toolbar>
                    <IconButton onClick = {togleSlider("right", true)}>
                        <ArrowBack style = {{ color: "tomato"}}/>
                    </IconButton>
                    <Typography variant = "h5" style = {{color: "tan"}} >
                        My Portfolip
                    </Typography>
                    <MobileRightMenuSlider 
                    anchor="right" 
                    open = {state.right}
                    onClose = {togleSlider("right", false)}
                    >
                        {sideList("right")}
                    </MobileRightMenuSlider>
                </Toolbar>
            </AppBar>
        </Box>
        </>
    )
}

export default Navbar
