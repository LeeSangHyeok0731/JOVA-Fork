import styled from "styled-components";

const LoginBtn = styled.button`
  background-color: skyblue;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function LoginButton() {
  return (
    <LoginBtn
      onClick={() => {
        window.location.href =
          "https://gauth.co.kr/login?client_id=ef87a56a1978408dafd0dfe9e851630b16677b9a3d804b93a75e3de53f4eca10&redirect_uri=https://gauth-test-qcns.vercel.app";
      }}
    >
      로그인하기
    </LoginBtn>
  );
}

export default LoginButton;
