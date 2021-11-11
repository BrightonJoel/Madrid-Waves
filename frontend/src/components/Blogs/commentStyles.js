import styled from "styled-components"

export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`

export const Avatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primaryBlue};
  height: 65px;
  width: 65px;
  font-size: 24px;
  color: ${({ theme }) => theme.colors.yellow};
  border: 2px solid ${({ theme }) => theme.colors.neutral};
  border-radius: 50%;
  cursor: pointer;
  user-select: none;
  transition: 100ms;
`

export const CommentBox = styled.div`
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.neutral};
  padding: 30px 50px;
  margin-bottom: 30px;
`
