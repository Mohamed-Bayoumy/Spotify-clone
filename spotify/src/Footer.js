import React from 'react'
import './footer.scss'
import ShuffleIcon from '@material-ui/icons/Shuffle';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious'; 
import SkipNextIcon from '@material-ui/icons/SkipNext'; 
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
function Footer() {
    return (
        <div className="footer">
     <div className="footer__left">

         <p>Album and Song details</p>
     </div>
     <div className="footer__center">
         <ShuffleIcon/>
         <SkipNextIcon/>
         <PlayCircleOutlineIcon/>
         <SkipNextIcon/>
         <RepeatIcon/>

     </div>
     <div className="footer__right">
         <p>Volume Controls</p>
     </div>
        </div>
    )
}

export default Footer
