import styled from "styled-components";
import YellowWaveBackground from "../../../assets/img/Background/YellowWave.png";
import FrameImage from "../../../assets/frame/frame1.png";

export const MainWrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${YellowWaveBackground});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export const CenterColumn = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const CenterRow = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Title = styled.span`
  font-family: "TTLaundryGothicB";
  font-size: 30px;
  color: #f9810a;
  margin-bottom: 30px;
`;

export const Frame = styled.div`
  height: fit-content;
  margin: 0 50px;
  height: 400px;
  width: 328px;
  border-radius: 10px;
  background-image: url(${FrameImage});
`;

export const BlankRow = styled.div`
  position: relative;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: row;
`;

export const Blank = styled.div`
  height: 126px;
  width: 140px;
  margin-left: 16px;
  margin-top: 16px;
  position: relative;
  background-color: white;
`;

export const UserImg = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export const AddImg = styled.img`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 30px;
`;

export const Toolbar = styled.div`
  margin: 0 50px;
  height: 400px;
  width: 328px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const Button = styled.button`
  width: 60%;
  background-color: var(--box-yellow-color);
  box-shadow: 0 6px 0 0 #ffc139;
  font-family: "NEXON Lv1 Gothic OTF";
  font-weight: bold;
  font-size: 15px;
  color: var(--font-color);
`;

export const ToolWrap = styled.div`
  height: 50%;
  width: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 30px;
`;

export const ToolTitle = styled.span`
  font-family: "NEXON Lv1 Gothic OTF";
  font-size: 17px;
  color: #616161;
  font-weight: bold;
`;

export const ToolRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
`;

export const Tool = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ToolImg = styled.img`
  height: 120px;
`;