/* ////////////////////////////////////////////////////////////////////////////////////*/
import React from 'react';                                                             //
import { Link } from '@reach/router';                                                  //
import { StyledHeader, StyledAlfredoMovieLogo, StyledTMDBLogo, StyledLinkedinLogo, StyledInfoLogo } from '../styles/StyledHeader'; //                                           //
/* /////////////////////////////////////////////////////////////////////////////////// */

//* ///////////////////////////////////////////////////////////////////////////////// *//
import RMDBLogo from '../images/reactMovie_logo.png';
import TMDBLogo from '../images/tmdb_logo.svg';
//* ///////////////////////////////////////////////////////////////////////////////// *//



const Header = () => (
  
  <StyledHeader>
    <div className="header-content">

      {/* //////////////////////////////////////////////////////////////////////// */}    
      <Link to="/">
        <StyledAlfredoMovieLogo src={'https://alfredorafael.com/wp-content/uploads/2020/04/MovieAppLogo.png'} alt="rmdb-logo" />
      </Link>
      {/* //////////////////////////////////////////////////////////////////////// */}
      
      <StyledTMDBLogo src={'https://alfredorafael.com/wp-content/uploads/2020/04/MDBLogo.png'} alt="tmdb-logo" />
    
      <StyledLinkedinLogo src={'https://alfredorafael.com/wp-content/uploads/2020/03/linkedin_logo_white.png'} alt="Linkedin Logo"/>

   {/*  <StyledInfoLogo src={'https://alfredorafael.com/wp-content/uploads/2020/04/InfoMovieApp.png'} alt="Info Logo"/>  */}  


    </div>
  </StyledHeader>
)

export default Header;