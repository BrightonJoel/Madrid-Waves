import styled from "styled-components"

export const FooterStyled = styled.footer`
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primaryBlue};
  color: ${({ theme }) => theme.colors.neutral};
`
