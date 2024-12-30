import styled from "styled-components";
import baseImage from "../../images/image/baseImage.png";
import PenIcon from "../../images/Pen";
import { useNavigate } from "react-router-dom";
import { useProfilContext } from "../../context/context";

const MajorBox = styled.div`
  display: inline-block;
  background-color: #818181;
  color: white;
  padding: 6px 12px;
  margin: 4px;
  border-radius: 5px;
  font-size: 14px;
  text-align: center;
  white-space: nowrap;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
`;

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
  margin-top: 60px;
  margin-left: 1000px;
`;

function ProfilPicture() {
  const { name, github, email, unMajor, funMajor } = useProfilContext();

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
            <UserImformation>{name}</UserImformation>
          </ImformationWrapper>
          <ImformationWrapper>
            <ProfilInformation>github:</ProfilInformation>
            <UserImformation>{github}</UserImformation>
          </ImformationWrapper>
          <ImformationWrapper>
            <ProfilInformation>E-mail:</ProfilInformation>
            <UserImformation>{email}</UserImformation>
          </ImformationWrapper>
          <ImformationWrapper>
            <ProfilInformation>전공:</ProfilInformation>
            <UserImformation>
              {unMajor.map((x) => {
                const majors = [
                  "FrontEnd",
                  "BackEnd",
                  "DevOps",
                  "UI/UX design",
                  "AI",
                  "AOS",
                  "IOS",
                  "DB",
                ];
                return <MajorBox key={`uni-${x}`}>{majors[x]}</MajorBox>;
              })}
              {funMajor.map((x) => {
                const majors = [
                  "게임개발",
                  "모바일로보틱스",
                  "클라우드컴퓨팅",
                  "플러터",
                  "사이버보안",
                  "IT네트워크",
                ];
                return <MajorBox key={`func-${x}`}>{majors[x]}</MajorBox>;
              })}
            </UserImformation>
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
