import styled from "@emotion/styled";
import React from "react";
import getRandomSubarray from "../helpers/Helpers";

const Container = styled.div`
  margin-left: 1rem;
`

const StyledTitle = styled.h1`
  display: flex;
  margin: 1.25rem 0rem;
  color: white;
`

const Card = styled.div`
  display: flex;
  gap: 0.3rem;
  overflow: auto;
  &::-webkit-scrollbar{
    display: none;
  }
`
const StyledCard = styled.div`
  min-width: 7rem;
  max-width: 7rem;
  height: 10rem;
  border: 1px solid;
  border-radius: 5%;
  padding: 1rem;
  text-overflow: ellipsis;
  text-align: center;
  color: white;
  background-image: url("https://w0.peakpx.com/wallpaper/690/315/HD-wallpaper-tree-of-gondor-earth-lord-middle-ring-rings.jpg");
  background-size: cover;
  object-fit: contain;
  background-position: center;
  background-repeat: no-repeat;
  cursor: pointer;
  transform: scale(0.9);
  &:hover{
    transform: scale(1);
    transition: 0.35s;
  }
`

export default function Row(props){
  return (
    <Container>
      <StyledTitle>{props.title + "S"}</StyledTitle>
      <Card>
        {getRandomSubarray(props.data, 7)?.map((data) =>(
        <StyledCard key={data._id}>{data.name}</StyledCard>
        ))}
      </Card>
    </Container>
  )
}