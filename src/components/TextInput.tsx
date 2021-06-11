import styled from "styled-components";

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

// interface MyProps extends InputProps {
//   filled?: boolean;
// }

export const TextInput = styled.input<InputProps>`
  height: 40px;
  width: 100%;
  /* margin: auto 0; */
  text-align: center;

  background: ${(p) => p.theme.background};

  border-radius: 10px;
  outline: none;

  border: ${p => p.value ?
  `1px solid ${p.theme.filledInput}`: 'none'};




  &:hover {
    border: 1px solid #333333;
    box-sizing: border-box;
  }
`;

// TextInput.defaultProps = {
  // filled: false,
// };

// default
