/* ////////////////////////////////////////////////////////////////////////////////////*/
import React from "react"; //
import { Link } from "@reach/router"; //
import {
  StyledHeader,
  StyledAlfredoMovieLogo,
  StyledTMDBLogo,
  StyledLinkedinLogo,
  StyledInfoLogo,
} from "../styles/StyledHeader"; //                                           //
/* /////////////////////////////////////////////////////////////////////////////////// */

//* ///////////////////////////////////////////////////////////////////////////////// *//
import RMDBLogo from "../images/reactMovie_logo.png";
import TMDBLogo from "../images/tmdb_logo.svg";
//* ///////////////////////////////////////////////////////////////////////////////// *//

const Header = () => (
  <StyledHeader>
    <div className="header-content">
      {/* //////////////////////////////////////////////////////////////////////// */}
      <StyledAlfredoMovieLogo
        src={
          "http://www.alfredorafael.com/wp-content/uploads/2020/04/MovieAppLogo.png"
        }
        alt="rmdb-logo"
      />{" "}
      <span
        style={{
          color: "white",
          marginBottom: "5%",
          fontFamily: "Abel, sans-serif",
          marginLeft: "1%",
          fontSize: "200%",
        }}
      >
        Movie App
      </span>
      {/* //////////////////////////////////////////////////////////////////////// */}
      <StyledTMDBLogo
        src={
          "https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
        }
        alt="tmdb-logo"
      />
      {/* //////////////////////////////////////////////////////////////////////// */}
      <a href={"https://www.linkedin.com/in/alfredo-rafael/"} target="_blank">
        <i
          class="fab fa-linkedin"
          style={{
            color: "white",
            float: "right",
            fontSize: "150%",
            marginRight: "2%",
            border: "1px solid white",
            padding: ".4% .5%",
            borderRadius: "5px",
            marginTop: ".5%",
          }}
        ></i>
      </a>
      {/* //////////////////////////////////////////////////////////////////////// */}
      {/*  <StyledInfoLogo src={'https://alfredorafael.com/wp-content/uploads/2020/04/InfoMovieApp.png'} alt="Info Logo"/>  */}
    </div>
  </StyledHeader>
);

export default Header;
