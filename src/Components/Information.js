import React from "react";
//Styled
import { StyledLittleTitle } from "../Styled/StyledHeader";
import { StyledCell } from "../Styled/StyledContent";
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
        基本信息
      </StyledLittleTitle>
      <StyledCell>
        <img src={education} alt="education" />
        曹慧珺｜女｜2022年6月毕业｜江苏科技大学｜信息安全
      </StyledCell>
      <StyledCell>
        <img src={skill} alt="skill" />
        技能：HTML｜CSS｜JavaScript｜React｜Git
      </StyledCell>
      <StyledCell>
        <img src={phone} alt="phone" />
        15601940829
      </StyledCell>
      <StyledCell>
        <img src={Wechat} alt="WeChat" />
        caohuijun0828
      </StyledCell>
      <StyledCell>
        <img src={github} alt="github" />
        https://github.com/caohuijun2018
      </StyledCell>
      <StyledCell>
        <img src={email} alt="email" />
        caohuijun2018@gmail.com
      </StyledCell>
      <StyledCell>
        <img src={evaluate} alt="evaluate" />
        自我评价：
        踏实肯干，态度认真，自学能力较强，有良好的沟通能力和团队合作能力
      </StyledCell>
    </div>
  );
};

export default information;
