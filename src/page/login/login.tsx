import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import LoginButton from "./loginBtn";
import Header from "../../components/Header";
import styled from "styled-components";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Wrapper = styled.div`
  padding-top: 100px;
`;

const Login = () => {
  const query = useQuery();
  const code = query.get("code");

  useEffect(() => {
    if (code) {
      const postCode = async () => {
        try {
          const response = await fetch(
            "https://port-0-jova-backend-m0kvtwm45b2f2eb2.sel4.cloudtype.app/auth/login",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ code: code }),
            }
          );

          const result = await response.json();
          console.log("Response:", result);
        } catch (error) {
          console.error("Error:", error);
        }
      };

      postCode();
    }
  }, [code]);

  return (
    <div>
      <Header />
      <Wrapper>
        <h1>Code: {code}</h1>
        <LoginButton />
      </Wrapper>
    </div>
  );
};

export default Login;
