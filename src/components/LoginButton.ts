import styled from "styled-components";

export const LoginButton = styled.button`
  background: ${(p) => p.theme.loginBackground};
  color: ${(p) => p.theme.loginFont};
  display: block;
  text-align: center;
  margin: 40px auto 20px auto;
  padding: 10px 45px;
  width: 194px;
  height: 39px;

  border-radius: 10px;
`;
