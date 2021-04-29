import React from "react";
//Styled
import { StyledLittleTitle } from "../Styled/StyledHeader";
import {
  StyledCell,
  StyledGithub,
  StyledGitLink,
  StyledLine,
  StyledTitle,
} from "../Styled/StyledContent";
//Image
import education from "../Img/Education.png";
import Information from "../Img/Information.png";
import phone from "../Img/Phone.png";
import github from "../Img/github.png";
import email from "../Img/Email.png";
import skill from "../Img/skill.png";
import evaluate from "../Img/evaluate.png";
import Wechat from "../Img/WeChat.png";

const information = () => {
  return (
    <div>
      <StyledLittleTitle>
        <img src={Information} alt="information" />
        <StyledTitle>基本信息</StyledTitle>
      </StyledLittleTitle>
      <ul>
        <div>
          <StyledCell>
            <img src={education} alt="education" />
            <StyledLine>
              曹慧珺｜女｜2022年6月毕业｜江苏科技大学｜信息安全
            </StyledLine>
          </StyledCell>
        </div>
        <div>
          <StyledCell>
            <img src={skill} alt="skill" />
            <StyledLine>技能：HTML｜CSS｜JavaScript｜React｜Git</StyledLine>
          </StyledCell>
        </div>
        <div>
          <StyledCell>
            <img src={phone} alt="phone" />
            <StyledLine>15601940829</StyledLine>
          </StyledCell>
        </div>
        <div>
          <StyledCell>
            <img src={Wechat} alt="WeChat" />
            <StyledLine>caohuijun0828</StyledLine>
          </StyledCell>
        </div>
        <div>
          <StyledCell>
            <StyledGithub src={github} alt="github" />
            <StyledGitLink
              href="https://github.com/caohuijun2018"
              target="_blank"
            >
              <StyledLine>github.com/caohuijun2018</StyledLine>
            </StyledGitLink>
          </StyledCell>
        </div>
        <div>
          <StyledCell>
            <img src={email} alt="email" />
            <StyledLine>caohuijun2018@gmail.com</StyledLine>
          </StyledCell>
        </div>
        <div>
          <StyledCell>
            <StyledGithub src={evaluate} alt="evaluate" />
            <StyledLine>
              自我评价： 踏实肯干，自学能力较强，有良好的沟通能力和团队合作能力
            </StyledLine>
          </StyledCell>
        </div>
      </ul>
    </div>
  );
};

export default information;
