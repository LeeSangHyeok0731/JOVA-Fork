import { useState } from "react";
import styled from "styled-components";
import baseImage from "../../../images/image/baseImage.png";

// 스타일 컴포넌트 정의
const Text = styled.h1`
  font-family: "Pretendard-Regular", sans-serif;
  margin: 0;
  font-size: 36px;
`;

const ProfilWrapper = styled.div`
  width: 1028px;
  height: 376px;
  display: flex;
  justify-content: space-between;
  margin-top: 85px;
  margin-left: 100px;
`;

const ProfilImage = styled.img`
  width: 376px;
  height: 376px;
  border-radius: 50%;
  margin-bottom: 20px;
`;

const ProfilInformationWrapper = styled.div`
  width: 562px;
  height: 376px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

const ProfilInformation = styled(Text)`
  font-size: 20px;
  color: #6c6c6c;
`;

const ImformationWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const ImageCorrection = styled.div`
  height: 463px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Body = styled.div`
  padding-top: 100px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const ImageUpload = styled.div`
  border: 2px dashed #ccc;
  border-radius: 8px;
  width: 197px;
  height: 87px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: #999;
  cursor: pointer;

  &:hover {
    background-color: #f9f9f9;
  }
`;

const ToBaseImage = styled.div`
  border-radius: 8px;
  width: 197px;
  height: 87px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: white;
  background-color: #929292;
  cursor: pointer;

  &:hover {
    background-color: #999;
  }
`;

const MiniBoxWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
`;

const InputBox = styled.input`
  width: 400px;
  height: 51px;
  background-color: #f5f5f5;
  border-radius: 8px;
  border: 0;
`;

const MajorSellectBtn = styled.div`
  width: 135px;
  height: 47px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  border: 1px solid #929292;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(8px);
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled.div`
  width: 400px;
  background: white;
  border-radius: 8px;
  padding: 20px;
  text-align: center;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  left: 10px;
  background: none;
  border: none;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  color: #666;

  &:hover {
    color: #333;
  }
`;

// 컴포넌트 정의
function ProfilPictureCorrection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <Body>
      <Text>개인정보 수정</Text>
      <ProfilWrapper>
        <ImageCorrection>
          <ProfilImage src={baseImage} />
          <MiniBoxWrapper>
            <ImageUpload>이미지 업로드하기</ImageUpload>
            <ToBaseImage>기본이미지</ToBaseImage>
          </MiniBoxWrapper>
        </ImageCorrection>
        <ProfilInformationWrapper>
          <ImformationWrapper>
            <ProfilInformation>이름:</ProfilInformation>
            <InputBox />
          </ImformationWrapper>
          <ImformationWrapper>
            <ProfilInformation>github:</ProfilInformation>
            <InputBox />
          </ImformationWrapper>
          <ImformationWrapper>
            <ProfilInformation>E-mail:</ProfilInformation>
            <InputBox />
          </ImformationWrapper>
          <ImformationWrapper>
            <ProfilInformation>전공:</ProfilInformation>
            <MajorSellectBtn onClick={handleModalOpen}>
              전공 선택
            </MajorSellectBtn>
          </ImformationWrapper>
        </ProfilInformationWrapper>
      </ProfilWrapper>

      {isModalOpen && (
        <ModalBackground>
          <ModalContent>
            <CloseButton onClick={handleModalClose}>×</CloseButton>
            <h2>전공 선택</h2>
            <p>전공을 선택하세요.</p>
          </ModalContent>
        </ModalBackground>
      )}
    </Body>
  );
}

export default ProfilPictureCorrection;
