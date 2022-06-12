import styled from "@emotion/styled";
import React from "react";
import getRandomSubarray from "../helpers/Helpers";

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
      <StyledTitle>{props.title}</StyledTitle>
      <Container>
        {getRandomSubarray(props.data, 7)?.map((data) =>(
        <StyledCard key={data._id}>{data.name}</StyledCard>
        ))}
      </Container>
    </React.Fragment>
  )
}