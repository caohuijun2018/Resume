//styled
import { StyledPage } from "../Styled/StyledPage";
import { StyledContent } from "../Styled/StyledContent";
import { StyledTitle } from "../Styled/StyledHeader";
import { StyledLittleTitle } from "../Styled/StyledHeader";
import { StyledTop } from "../Styled/StyledContent";
//image
import flag from "../Img/Flag.png";
function Content() {
  return (
    <StyledPage>
      <StyledContent>
        <StyledTop>
          <StyledTitle>曹慧珺/个人简历</StyledTitle>
        </StyledTop> 
        <StyledLittleTitle>
          <img src={flag} alt="flag" />  意向职位
        </StyledLittleTitle>
      </StyledContent>
    </StyledPage>
  );
}
export default Content;
