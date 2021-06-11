import styled from "styled-components";

type LabelProps = React.DetailedHTMLProps<
  React.LabelHTMLAttributes<HTMLLabelElement>,
  HTMLLabelElement
>;

export const Label = styled.p<LabelProps>`
  font-family: Red Hat Display;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  // /* identical to box height */
  color: ${(p) => p.theme.label};
  text-align: left;
  /* margin-left: 30px; */
  margin: 15px 0 7px 30px;
`;
