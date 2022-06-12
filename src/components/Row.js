import styled from "@emotion/styled";
import React from "react";
import getRandomSubarray from "../helpers/Helpers";

const Container = styled.div`
  margin-left: 1rem;
`

const StyledTitle = styled.h1`
  display: flex;
  margin: 1.25rem 0rem;
`

const Card = styled.div`
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
    <Container>
      <StyledTitle>{props.title}</StyledTitle>
      <Card>
        {getRandomSubarray(props.data, 7)?.map((data) =>(
        <StyledCard key={data._id}>{data.name}</StyledCard>
        ))}
      </Card>
    </Container>
  )
}