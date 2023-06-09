import './Topbar.css';
import {Search , Person , Chat , Notifications } from '@mui/icons-material';
import { Link } from 'react-router-dom';

export default function Topbar() {
   
  return (
    <div className='topbarContainer'>
    <div className='topbarLeft'>
        <Link to="/" style ={{textDecoration:"none"}}>
        <span className='logo'>AE Social</span>
        </Link>
    </div>
    <div className='topbarCenter'>
        <div className='searchbar'>
            <Search className='searchIcon'/>
            <input placeholder='Search for friends, post or video' className='searchInput' />

        </div>
    </div>
    <div className='topbarRight'>
        <div className='topbarLinks'>
            <span className='topbarLink'>Homepage</span>
            <span className='topbarLink'>Timeline</span>
        </div>
        <div className='topbarIcons'>
            <div className='topbarIconsItem'>
                <Person />
                <span className='topbarIconBadge'>1</span>
            </div>
            <div className='topbarIconsItem'>
                <Chat />
                <span className='topbarIconBadge'>2</span>
            </div><div className='topbarIconsItem'>
                <Notifications />
                <span className='topbarIconBadge'>7</span>
            </div>
        </div>
        <Link to="/profile">
        <img src='/assets/person/1.jpg' alt='' className='topbarImg' />
        </Link>
    </div>
    </div>
  )
}
