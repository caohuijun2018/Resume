import styled from "styled-components";

export const StyledContent = styled.div`
  @media not print {
    background: #fffaf0;
    height: 100%;
    width: 90%;
    max-width: 960px;
    margin: 3em auto;
    padding-bottom: 50px;
    box-shadow: grey 5px 7px 10px 10px;
  }
  @media print {
    max-width: 100%;
    wwidth: 100%;
  }
`;
export const StyledUl = styled.ul`
  padding-left: 60px;
`;
export const Styleda = styled.a`
  display: flex;
  align-items: center;
  margin-left: 20px;
`;
export const StyledTop = styled.div`
  background: white;
  height: 4rem;
  justify-content: center;
  padding-top: 10px;
  display: block;
  text-align: center;
`;
export const StyledAll = styled.div`
  margin: 0 7%;
`;
export const StyledCell = styled.div`
  font-size: 14px;
  display: flex;
  align-items: center;
`;
export const StyledYixiang = styled.div`
  padding-left: 20px;
  color: #ff748c;
  margin: 3px 42px;
  font-size: 19px;
  font-weight: 600;
`;
export const StyledDefinite = styled.div`
  font-size: 0.8rem;
  display: flex;
`;
export const StyledProjectLink = styled.div`
  display: flex;
  margin-left: 18rem;
  font-size: 15px;
  align-items: center;
`;

export const StyledGitLink = styled.a`
  color: #3f73f6;
`;
export const StyledResumeLink = styled.p`
  @media not print {
    font-size: 10px;
    color: #3f73f6;
    display: flex;
    justify-content: center;
    display: none;
  }
`;
export const StyledLine = styled.div`
  display: flex;
  align-items: center;
`;
export const StyledTitle = styled.div`
  display: inline;
  padding: 0 20px;
`;
export const StyledGithub = styled.img`
  width: 29px;
  margin-left: 0.15rem;
  display: flex;
  align-items: center;
`;
export const StyledHonor = styled.img`
  width: 2.2rem;
`;
