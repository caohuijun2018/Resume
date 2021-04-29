//Styled
import { StyledPage } from "../Styled/StyledPage";
import { StyledContent, StyledResumeLink } from "../Styled/StyledContent";
import { StyledLittleTitle } from "../Styled/StyledHeader";
import { StyledTop } from "../Styled/StyledContent";
import { StyledAll } from "../Styled/StyledContent";
import { StyledYixiang } from "../Styled/StyledContent";
//Image
import flag from "../Img/Flag.png";
//Components
import information from "./Information";
import talent from "./Skill";
import project from "./Project";
import honor from "./Honor";
function Content() {
  return (
    <StyledPage>
      <StyledContent>
        <StyledTop>
          <h1>
            {" "}
            曹慧珺 / 个人简历
            <StyledResumeLink>
              在线简历：
              <a href="https://caohuijun.hi-hi.cn/" target="_black">
                caohuijun.hi-hi.cn
              </a>
            </StyledResumeLink>{" "}
          </h1>
        </StyledTop>
        <StyledAll>
          <StyledLittleTitle>
            <img src={flag} alt="flag" />
            意向职位
          </StyledLittleTitle>
          <StyledYixiang> 前端开发实习生 </StyledYixiang>
          {information()}
          {talent()}
          {honor()}
          {project()}
        </StyledAll>
      </StyledContent>
    </StyledPage>
  );
}
export default Content;
