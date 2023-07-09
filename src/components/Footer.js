import React from 'react'
import LinkedInIcon  from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub';
import '../styles/footer.css'
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <Link to="https://www.linkedin.com/in/tushar2jain"><LinkedInIcon/></Link>
            <Link to="https://www.github.com.tusharjain01"><GitHubIcon/></Link>
        </div>
        <p>&copy; 2023 Tushar Jain</p>
    </div>
  )
}

export default Footer