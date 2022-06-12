import styled from "@emotion/styled";
import React from "react";

const StyledTitle = styled.h1`
  display: flex;
`
const Container = styled.div`
  display: flex;
  gap: 10px;
`
const StyledCard = styled.div`
  width: 6rem;
  height: 8rem;
  border: 1px solid;
  text-align: center;
`

export default function Row(props){
  
  return (
    <React.Fragment>
      <StyledTitle>BOOKS</StyledTitle>
      <Container>
        {props.books?.map((book) =>(
        <StyledCard key={book._id}>{book.name}</StyledCard>
        ))}
      </Container>
    </React.Fragment>
  )
}