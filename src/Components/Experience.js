import { StyledLittleTitle } from "../Styled/StyledHeader";
import { StyledCell } from "../Styled/StyledContent";
import { StyledLine } from "../Styled/StyledContent";
import {
  StyledTitle, StyledUl,
} from "../Styled/StyledContent";
import work from '../Img/work.png'
import dengpao from '../Img/dengpao.png'
const workExperience = () =>{
    return (
      <div>
        <StyledLittleTitle>
        <img src={work} alt="work" />
        <StyledTitle>实习经历</StyledTitle>
      </StyledLittleTitle>
      <StyledUl>
        <div>
        <StyledCell>
            <img src={dengpao} alt="dengpao" />
            <StyledLine>
             达观数据 2021.7 ～ 至今
            </StyledLine>
          </StyledCell>
        </div>
      </StyledUl>
      </div>
      
    )
}

export default workExperience;