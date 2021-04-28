//Styled
import { StyledLittleTitle } from "../Styled/StyledHeader";
import {
  StyledCell,
  StyledDefinite,
  StyledProjectLink,
} from "../Styled/StyledContent";
//Image
import project from "../Img/project.png";
import tagProject from "../Img/TagProject.png";
import lightning from "../Img/lightning.png";
import link from "../Img/link.png";
const experience = () => {
  return (
    <div>
      <StyledLittleTitle>
        <img src={project} alt="project" />
        个人项目展示
      </StyledLittleTitle>
      <StyledCell>
        <img src={tagProject} alt="tagProject" />
        俄罗斯方块
        <StyledProjectLink>
          <a href="https://react-tetris.hi-hi.cn/" target="_blank">
            {" "}
            <img src={link} alt="link" /> Demo
          </a>
          <a
            href="https://github.com/caohuijun2018/react-tetris"
            target="_blank"
          >
            <img src={link} alt="link" />
            源代码
          </a>
        </StyledProjectLink>
      </StyledCell>
      <StyledDefinite>
        <img src={lightning} alt="lightning" />
        基于 React 框架实现
      </StyledDefinite>
      <StyledDefinite>
        <img src={lightning} alt="lightning" />
        使用 styled-components 进行网页样式设计，使用自定义的 Hooks 组件
      </StyledDefinite>
      <StyledDefinite>
        <img src={lightning} alt="lightning" />
        实现俄罗斯方块的自动出现，方向翻转，消除，是否遇到墙壁的判断
      </StyledDefinite>
      <StyledDefinite>
        <img src={lightning} alt="lightning" />
        支持键盘方向键操作
      </StyledDefinite>
      <StyledCell>
        <img src={tagProject} alt="tagProject" />
        扫雷小游戏
        <StyledProjectLink>
          <a href="https://minesweeper.hi-hi.cn/" target="_blank">
            {" "}
            <img src={link} alt="link" /> Demo
          </a>
          <a href="https://github.com/caohuijun2018/minsweeper" target="_blank">
            <img src={link} alt="link" />
            源代码
          </a>
        </StyledProjectLink>
      </StyledCell>
      <StyledDefinite>
        <img src={lightning} alt="lightning" />
        基于 React 实现的单页游戏
      </StyledDefinite>
      <StyledDefinite>
        <img src={lightning} alt="lightning" />
        支持三个档位的难度变化
      </StyledDefinite>
      <StyledDefinite>
        <img src={lightning} alt="lightning" />
        支持游戏界面点击，右击标记，游戏状态记录以及更新变化
      </StyledDefinite>
    </div>
  );
};
export default experience;
