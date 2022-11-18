import React from 'react'
import './header.css'
import PersonIcon from '@mui/icons-material/Person';
import { IconButton } from '@mui/material';
import ForumIcon from '@mui/icons-material/Forum';

function Header() {
  return (
    <div className='header'> <IconButton>
    <PersonIcon fontSize='large' className="header_icon"/>
    </IconButton>

    <img src='https://cdn.pixabay.com/photo/2016/06/09/18/36/logo-1446293_960_720.png' alt='logo' className='header__logo'/>
   <IconButton> <ForumIcon fontSize='large' className="header_icon"/></IconButton>
</div>
    
  )
}

export default Header