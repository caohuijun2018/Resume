//Styled
import { StyledPage } from "../Styled/StyledPage";
import {
  StyledContent,
  StyledResumeLink,
  StyledTitle,
} from "../Styled/StyledContent";
import { StyledLittleTitle } from "../Styled/StyledHeader";
import { StyledTop } from "../Styled/StyledContent";
import { StyledAll } from "../Styled/StyledContent";
import { StyledYixiang } from "../Styled/StyledContent";
//Image
import position from '../Img/position.png'
//Components
import information from "./Information";
import talent from "./Skill";
import project from "./Project";
import honor from "./Honor";
import workExperience from './Experience'
function Content() {
  return (
    <StyledPage>
      <StyledContent>
        <StyledTop>
          <h1>曹慧珺 / 个人简历</h1>
          <StyledResumeLink>
            在线简历：
            <a href="https://caohuijun.hi-hi.cn/" target="_black">
              caohuijun.hi-hi.cn
            </a>
          </StyledResumeLink>
        </StyledTop>
        <StyledAll>
          <StyledLittleTitle>
            <img src={position} alt="position" />
            <StyledTitle>意向职位</StyledTitle>
          </StyledLittleTitle>
          <StyledYixiang> 前端开发工程师 </StyledYixiang>
          {information()}
          {talent()}
          {honor()}
          {project()}
          {workExperience()}
        </StyledAll>
      </StyledContent>
    </StyledPage>
  );
}
export default Content;
