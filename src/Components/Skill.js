//Styled
import { StyledLittleTitle } from "../Styled/StyledHeader";
import { StyledCell, StyledLine, StyledTitle } from "../Styled/StyledContent";
//Image
import tag from "../Img/tag.png";
import start from "../Img/start.png";

const talent = () => {
  return (
    <div>
      <StyledLittleTitle>
        <img src={tag} alt="tag" />
        <StyledTitle>技能特长</StyledTitle>
      </StyledLittleTitle>
      <ul>
        <div>
          <StyledCell>
            <img src={start} alt={start} />
            <StyledLine>
              熟悉 HTML，CSS，熟练使用 HTML，CSS，JavaScript 进行网页开发
            </StyledLine>
          </StyledCell>
        </div>
        <div>
          <StyledCell>
            <img src={start} alt={start} />
            <StyledLine>
              {" "}
              熟悉 React 框架，React Hooks，可以构建单页 Web 应用
            </StyledLine>
          </StyledCell>
        </div>
        <div>
          <StyledCell>
            <img src={start} alt={start} />
            <StyledLine>熟悉 Git 开发流程</StyledLine>
          </StyledCell>
        </div>
        <div>
          <StyledCell>
            <img src={start} alt={start} />
            <StyledLine>熟悉常用的数据结构和算法，了解计算机网络等</StyledLine>
          </StyledCell>
        </div>
        <div>
          <StyledCell>
            <img src={start} alt={start} />
            <StyledLine>英语：CET6</StyledLine>
          </StyledCell>
        </div>
      </ul>
    </div>
  );
};
export default talent;
