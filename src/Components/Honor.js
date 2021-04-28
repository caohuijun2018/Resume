//Styled
import { StyledLittleTitle } from "../Styled/StyledHeader";
import { StyledCell } from "../Styled/StyledContent";
//Image
import honorPhoto from "../Img/honor.png";
import sun from "../Img/sun.png";
const honor = () => {
  return (
    <div>
      <StyledLittleTitle>
        <img src={honorPhoto} alt="honorPhoto" />
        个人荣誉
      </StyledLittleTitle>
      <StyledCell>
        <img src={sun} alt="sun" />
        校级优秀三好学生 2018-2020
      </StyledCell>
      <StyledCell>
        <img src={sun} alt="sun" />
        人民一等奖学金 2018-2020
      </StyledCell>
      <StyledCell>
        <img src={sun} alt="sun" />
        计算机技术与软件专业技术资格 - 软件设计师 2020.11
      </StyledCell>
      <StyledCell>
        <img src={sun} alt="sun" />
        江苏省大学生信息技术应用能力比赛 三等奖 2020.12
      </StyledCell>
      <StyledCell>
        <img src={sun} alt="sun" />
        校级编程技能比赛 最佳程序媛奖 2019.10
      </StyledCell>
    </div>
  );
};
export default honor;
