import styled from "@emotion/styled";

const StyledTitle = styled.h1`
  display: flex;
`
const StyledCard = styled.div`

`

export default function Row(props){
  
  return (
    <StyledTitle>{props.title}</StyledTitle>
  )
}