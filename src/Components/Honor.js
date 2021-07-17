//Styled
import { StyledLittleTitle } from "../Styled/StyledHeader";
import {
  StyledCell,
  StyledLine,
  StyledTitle,
  StyledUl,
  StyledHonor,
} from "../Styled/StyledContent";
//Image
import honorP from "../Img/honorp.png";

import sun from "../Img/sun.png";
const honor = () => {
  return (
    <div>
      <StyledLittleTitle>
        <StyledHonor src={honorP} alt="honorPhoto" />
        <StyledTitle>个人荣誉</StyledTitle>
      </StyledLittleTitle>
      <StyledUl>
        <div>
          <StyledCell>
            <img src={sun} alt="sun" />
            <StyledLine>校级优秀三好学生 2018-2020</StyledLine>
          </StyledCell>
        </div>
        <div>
          <StyledCell>
            <img src={sun} alt="sun" />
            <StyledLine>人民一等奖学金 2018-2020</StyledLine>
          </StyledCell>
        </div>
        <div>
          <StyledCell>
            <img src={sun} alt="sun" />
            <StyledLine>
              计算机技术与软件专业技术资格 - 软件设计师 2020.11
            </StyledLine>
          </StyledCell>
        </div>
        <div>
          <StyledCell>
            <img src={sun} alt="sun" />
            <StyledLine>
              江苏省大学生信息技术应用能力比赛 三等奖 2020.12
            </StyledLine>
          </StyledCell>
        </div>
        <div>
          <StyledCell>
            <img src={sun} alt="sun" />
            <StyledLine>校级编程技能比赛 最佳程序媛奖 2019.10</StyledLine>
          </StyledCell>
        </div>
      </StyledUl>
    </div>
  );
};
export default honor;
