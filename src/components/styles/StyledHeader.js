import styled from 'styled-components';

export const StyledHeader = styled.div`
  background: #040182;
  padding: 0 20px;
  box-sizing: border-box;

  .header-content {
    max-width: 1280px;
    // min-height: 120px;
    padding: 20px 0px;
    margin: 0 auto;
    box-sizing: border-box;

    @media screen and (max-width: 500px) {
      max-width: 1280px;
      min-height: 0px;
    }
  }
`;

export const StyledAlfredoMovieLogo = styled.img`
  width: 200px;
  margin-top: 7px;

  @media screen and (max-width: 500px) {
    width: 150px;
    margin-top: 5px;
  }
`;

export const StyledTMDBLogo = styled.img`
  width: 70px;
  margin-top: 8px;
  float: right;

  @media screen and (max-width: 500px) {
    display: inline-block;
    width: 80px;
    margin-top: 0px;
  }
`

export const StyledLinkedinLogo = styled.img`
  width: 70px;
  margin-top: 8px;
  float: right;
  margin-right: 7px;

  @media screen and (max-width: 500px) {
    display: inline-block;
    width: 80px;
    margin-top: 0px;
  }`

  export const StyledInfoLogo = styled.img`
  width: 70px;
  margin-top: 8px;
  float: right;
  margin-right: 7px;

  @media screen and (max-width: 500px) {
    display: inline-block;
    width: 80px;
    margin-top: 0px;
  }`
;
