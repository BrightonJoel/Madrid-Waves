import styled from "styled-components"

export const FooterStyled = styled.footer`
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  // background-color: ${({ theme }) => theme.colors.primaryBlue};
  background: rgb(0, 71, 151);
  background: radial-gradient(
    circle,
    rgba(0, 71, 151, 1) 0%,
    rgba(0, 71, 151, 1) 48%,
    rgba(0, 23, 151, 1) 100%
  );
  color: ${({ theme }) => theme.colors.neutral};
`
