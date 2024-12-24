import styled from "styled-components";
import baseImage from "../../images/image/baseImage.png";
import { useState } from "react";
import PenIcon from "../../images/Pen";
import { useNavigate } from "react-router-dom";

const Text = styled.h1`
  font-family: "Pretendard-Regular", sans-serif;
  margin: 0;
  font-size: 36px;
`;

const ProfilWrapper = styled.div`
  width: 687px;
  height: 376px;
  display: flex;
  justify-content: space-between;
  margin-top: 85px;
  margin-right: 200px;
`;

const ProfilImage = styled.img`
  width: 376px;
  height: 376px;
  border-radius: 50%;
`;

const ProfilInformationWrapper = styled.div`
  width: 222px;
  height: 376px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

const ProfilInformation = styled(Text)`
  font-size: 24px;
`;

const ImformationWrapper = styled.div``;

const UserImformation = styled(Text)`
  font-size: 24px;
  color: rgba(148, 148, 148, 1);
  font-weight: 100;
`;

const CorrectionButton = styled.div`
  width: 135px;
  height: 65px;
  border: 1px solid #929292;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ProfilPicture() {
  const [userName, setUserName] = useState("이름");
  const [github, setGithub] = useState("https://github.com/LeeSangHyeok0731");
  const [mail, setMail] = useState("s20000@gsm.hs.kr");
  const [major, setmajor] = useState("프론트엔드");

  const go = useNavigate();

  const goPath = () => {
    go("/profilcorrection");
  };

  return (
    <>
      <Text>마이 페이지</Text>
      <ProfilWrapper>
        <ProfilImage src={baseImage} />
        <ProfilInformationWrapper>
          <ImformationWrapper>
            <ProfilInformation>이름:</ProfilInformation>
            <UserImformation>{userName}</UserImformation>
          </ImformationWrapper>
          <ImformationWrapper>
            <ProfilInformation>github:</ProfilInformation>
            <UserImformation>{github}</UserImformation>
          </ImformationWrapper>
          <ImformationWrapper>
            <ProfilInformation>E-mail:</ProfilInformation>
            <UserImformation>{mail}</UserImformation>
          </ImformationWrapper>
          <ImformationWrapper>
            <ProfilInformation>전공:</ProfilInformation>
            <UserImformation>{major}</UserImformation>
          </ImformationWrapper>
        </ProfilInformationWrapper>
      </ProfilWrapper>
      <CorrectionButton onClick={goPath}>
        <PenIcon />
        수정하기
      </CorrectionButton>
    </>
  );
}

export default ProfilPicture;
