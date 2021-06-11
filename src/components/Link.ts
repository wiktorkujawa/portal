import styled from "styled-components";
import { theme } from "../theme/theme";


interface myProps {
  color?: string
}


export const Link = styled.a<myProps>`
  color: ${p => p.color};

`;

Link.defaultProps = {
  color: theme.font
};