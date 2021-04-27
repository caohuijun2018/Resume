//Styled
import { StyledPage } from "../Styled/StyledPage";
import { StyledContent } from "../Styled/StyledContent";
import { StyledTitle } from "../Styled/StyledHeader";
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
          <StyledTitle>曹慧珺/个人简历</StyledTitle>
        </StyledTop>
        <StyledAll>
          <StyledLittleTitle>
            <img src={flag} alt="flag" />
            意向职位
          </StyledLittleTitle>
          <StyledYixiang>前端工程师</StyledYixiang>
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
