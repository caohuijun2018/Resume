//Styled
import { StyledLittleTitle } from "../Styled/StyledHeader";
import {
  Styleda,
  StyledCell,
  StyledDefinite,
  StyledLine,
  StyledProjectLink,
  StyledTitle,
  StyledUl,
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
        <StyledTitle>个人项目展示</StyledTitle>
      </StyledLittleTitle>
      <StyledUl>
        <div>
          <StyledCell>
            <img src={tagProject} alt="tagProject" />
            <StyledLine>俄罗斯方块</StyledLine>
            <StyledProjectLink>
              <Styleda href="https://react-tetris.hi-hi.cn/" target="_blank">
                {" "}
                <img src={link} alt="link" /> Demo
              </Styleda>
              <Styleda
                href="https://github.com/caohuijun2018/react-tetris"
                target="_blank"
              >
                <img src={link} alt="link" />
                源代码
              </Styleda>
            </StyledProjectLink>
          </StyledCell>
          <ul>
            <div>
              <StyledDefinite>
                <img src={lightning} alt="lightning" />
                <StyledLine>基于 React 框架实现</StyledLine>
              </StyledDefinite>
            </div>
            <div>
              <StyledDefinite>
                <img src={lightning} alt="lightning" />
                <StyledLine>
                  使用 styled-components 进行网页样式设计，使用自定义的 Hooks
                  组件
                </StyledLine>
              </StyledDefinite>
            </div>
            <div>
              <StyledDefinite>
                <img src={lightning} alt="lightning" />
                <StyledLine>
                  实现俄罗斯方块的自动出现，方向翻转，消除，是否遇到墙壁的判断
                </StyledLine>
              </StyledDefinite>
            </div>
            <div>
              <StyledDefinite>
                <img src={lightning} alt="lightning" />
                <StyledLine>支持键盘方向键操作</StyledLine>
              </StyledDefinite>
            </div>
          </ul>
        </div>
        <div>
          <StyledCell>
            <img src={tagProject} alt="tagProject" />
            <StyledLine>扫雷小游戏</StyledLine>
            <StyledProjectLink>
              <Styleda href="https://minesweeper.hi-hi.cn/" target="_blank">
                {" "}
                <img src={link} alt="link" /> Demo
              </Styleda>
              <Styleda
                href="https://github.com/caohuijun2018/minsweeper"
                target="_blank"
              >
                <img src={link} alt="link" />
                源代码
              </Styleda>
            </StyledProjectLink>
          </StyledCell>
          <ul>
            <div>
              <StyledDefinite>
                <img src={lightning} alt="lightning" />
                <StyledLine>基于 React 实现的单页游戏</StyledLine>
              </StyledDefinite>
            </div>
            <div>
              <StyledDefinite>
                <img src={lightning} alt="lightning" />
                <StyledLine> 支持三个档位的难度变化</StyledLine>
              </StyledDefinite>
            </div>
            <div>
              <StyledDefinite>
                <img src={lightning} alt="lightning" />
                <StyledLine>
                  支持游戏界面点击，右击标记，游戏状态记录以及更新变化
                </StyledLine>
              </StyledDefinite>
            </div>
          </ul>
        </div>
      </StyledUl>
    </div>
  );
};
export default experience;
