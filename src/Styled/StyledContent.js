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

export const StyledTop = styled.div`
  background: white;
  height: 4rem;
  padding-left: 29rem;
  padding-top: 10px;
  display: block;
`;
export const StyledAll = styled.div`
  margin: 0 7%;
`;
export const StyledCell = styled.div`
  font-size: 14px;
  margin-left: 20px;
  margin-bottom: 5px;
  display: flex;
`;
export const StyledYixiang = styled.div`
  margin-left: 20px;
  color: #ff748c;
  margin-bottom: 5px;
  font-size: 19px;
  font-weight: 600;
`;
export const StyledDefinite = styled.div`
  margin-left: 35px;
  font-size: 0.8rem;
  margin-bottom: 5px;
  display: flex;
`;
export const StyledProjectLink = styled.div`
  display: flex;
  margin-left: 12rem;
  font-size: 15px;
`;
export const StyledGitLink = styled.a`
  margin-left: 0px;
  display: inline-flex;
  color: #3f73f6;
`;
export const StyledResumeLink = styled.h4`
  @media print {
    color: #3f73f6;
  }
`;
