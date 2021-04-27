//Styled
import { StyledLittleTitle } from "../Styled/StyledHeader";
import { StyledCell } from "../Styled/StyledContent";
//Image
import tag from "../Img/tag.png";
import start from "../Img/start.png";

const talent = () => {
  return (
    <div>
      <StyledLittleTitle>
        <img src={tag} alt="tag" />
        技能特长
      </StyledLittleTitle>
      <StyledCell>
        <img src={start} alt={start} />
        熟悉HTML，CSS，熟练使用HTML，CSS，JavaScript进行网页开发
      </StyledCell>
      <StyledCell>
        <img src={start} alt={start} />
        熟悉React框架，ReactHooks，可以构建单页Web应用
      </StyledCell>
      <StyledCell>
        <img src={start} alt={start} />
        熟悉Git开发流程
      </StyledCell>
      <StyledCell>
        <img src={start} alt={start} />
        熟悉常用的数据结构和算法，了解计算机网络等
      </StyledCell>
      <StyledCell>
        <img src={start} alt={start} />
        英语：CET6 GPA：4.0/4.5
      </StyledCell>
    </div>
  );
};
export default talent;