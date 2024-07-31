import styled from "styled-components";

export const CenterRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const BoxWrap = styled.div`
  background-color: ${(props) => props.bgColor || "#fff"};
  border-radius: 40px;
  box-shadow: 0px 10px 40px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 2vw;
  margin: 0 2vw;
`;

export const ImageBox = styled.div`
  width: 15vw;
  height: 12vw;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  padding: 2vw;
  box-shadow: ${(props) => props.shadow || "none"};
`;

export const GameImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 30px;
`;

export const ItemName = styled.div`
  margin-top: 6vh;
  margin-bottom: 3vh;
  font-size: 1vw;
  font-weight: 700;
  color: ${(props) => props.color || "#000"};
`;