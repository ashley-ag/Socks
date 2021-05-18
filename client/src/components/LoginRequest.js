import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { pageAnimation } from "../animations";

const LoginRequest = () => {
  return (
    <SectionStyl
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <StyledDiv>
        <Styledh2>Welcome to Socks</Styledh2>
        <StyledP>
          Socks is a web-based application that allows a user to sign into their
          account, log their current stock units and cryptocurrency shares.
          Socks is a great choice for new and experienced investors alike.{" "}
        </StyledP>

        <Styledh3>
          To continue please login or sign up!
          <br></br>
          <Link to="/login">
            <button id={"button1"} path="/">
              Login
            </button>
          </Link>
        </Styledh3>
      </StyledDiv>
      <SvgDiv>
        <svg
          id="bb328e6d-602c-4acd-b0f5-b204c203e1c3"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          width="821.16801"
          height="687.80201"
          viewBox="0 0 821.16801 687.80201"
        >
          <polygon
            points="755.994 674.556 743.734 674.555 737.902 627.268 755.996 627.268 755.994 674.556"
            fill="#9e616a"
          />
          <path
            d="M948.53667,792.539l-39.53076-.00146v-.5a15.3873,15.3873,0,0,1,15.38647-15.38623h.001l24.144.001Z"
            transform="translate(-189.41599 -106.099)"
            fill="#2f2e41"
          />
          <polygon
            points="708.994 674.556 696.734 674.555 690.902 627.268 708.996 627.268 708.994 674.556"
            fill="#9e616a"
          />
          <path
            d="M901.53667,792.539l-39.53076-.00146v-.5a15.3873,15.3873,0,0,1,15.38647-15.38623h.001l24.144.001Z"
            transform="translate(-189.41599 -106.099)"
            fill="#2f2e41"
          />
          <path
            id="ae5c11dc-7e77-468a-a39f-cc8da6ee1565"
            data-name="Path 1495"
            d="M368.748,790.71V410.9a8.82,8.82,0,0,1,8.82-8.82h39.36a8.82,8.82,0,0,1,8.82,8.82h0V791.7Z"
            transform="translate(-189.41599 -106.099)"
            fill="#3f3d56"
          />
          <path
            id="bc696f83-47b6-45c9-967f-bb64f1f3bee5"
            data-name="Path 1496"
            d="M498.748,791.9v-302a8.82,8.82,0,0,1,8.82-8.82h39.36a8.82,8.82,0,0,1,8.82,8.82h0V791.25Z"
            transform="translate(-189.41599 -106.099)"
            fill="#3f3d56"
          />
          <path
            d="M267.747,433.09884a2.9998,2.9998,0,0,1-2.23278-5.00244l131.60547-146.791L526.638,354.03488,656.92679,129.53732,789.65458,238.78244a3.00008,3.00008,0,1,1-3.813,4.63281L658.56937,138.66037,528.85819,362.16281,398.37614,288.8923,269.9816,432.10129A2.99144,2.99144,0,0,1,267.747,433.09884Z"
            transform="translate(-189.41599 -106.099)"
            fill="#3f3d56"
          />
          <circle
            id="a1f8771a-4bf9-4603-9747-6ae739e4ad47"
            data-name="Ellipse 300"
            cx="77.832"
            cy="324"
            r="28"
            fill="#a300a3"
          />
          <circle
            id="ffdbdf53-78c2-412f-9ede-372406e5d245"
            data-name="Ellipse 301"
            cx="207.832"
            cy="179"
            r="28"
            fill="#ccc"
          />
          <circle
            id="b7cff929-f00d-4f86-944c-e500b6ceb6ad"
            data-name="Ellipse 302"
            cx="337.832"
            cy="252"
            r="28"
            fill="#e6e6e6"
          />
          <circle
            id="eabc0b76-6faa-4fa0-934c-daff28b491dd"
            data-name="Ellipse 303"
            cx="467.832"
            cy="28"
            r="28"
            fill="#a300a3"
          />
          <circle
            id="a7ca0488-8ee6-49e2-b245-2872b84c042e"
            data-name="Ellipse 304"
            cx="717.832"
            cy="236.535"
            r="28"
            fill="#a300a3"
          />
          <path
            id="b579ef19-595a-43de-9b6d-0ead8268ca48"
            data-name="Path 1507"
            d="M897.348,560.755c10.47981,1.26236,37.279-8.29806,38.73146,6.24641,13.7938,40.605,13.38448,196.25632,13.38448,196.25632l-21,1S911.683,640.58334,903.74813,614.12488c-3.98187,32.159-3.28421,155.13285-3.28421,155.13285l-19,1s-17.04317-104.7174-17.14045-135.45308c-2.07126-22.51351,3.00876-55.87593.83463-77.63979a83.21836,83.21836,0,0,0,32.19,3.59Z"
            transform="translate(-189.41599 -106.099)"
            fill="#3f3d56"
          />
          <path
            id="b3465432-03e0-48eb-8016-b04aa244e72c"
            data-name="Path 1513"
            d="M758.748,790.554V352.8c0-5.614,3.949-10.166,8.82-10.166h39.36c4.871,0,8.82,4.551,8.82,10.166V791.7Z"
            transform="translate(-189.41599 -106.099)"
            fill="#3f3d56"
          />
          <path
            id="ac7870c5-efcc-4c4b-b17f-07e0bff4d096"
            data-name="Path 1508"
            d="M861.698,442.955a130.65716,130.65716,0,0,0-15.31-24.17,38.322,38.322,0,0,1-3.4-4.64c-2.15-3.73-2.79-8.11-4.15-12.19-3.8-11.44-13.28-20.63-15.59-32.46-.84-4.3-7.93567,8.19791-6.07,13.53,3.33,9.65,3.76,19.87,8,29.19s9.22,18.26,12.88,27.79c2.08,5.41,3.74,11,6.79,16s7.81,9.19,13.56,9.94a33.44983,33.44983,0,0,1,1.63013-10.68C861.288,451.325,863.508,446.685,861.698,442.955Z"
            transform="translate(-189.41599 -106.099)"
            fill="#9e616a"
          />
          <path
            id="be4b35b3-6955-40b7-9549-45fdba6a2930"
            data-name="Path 1509"
            d="M924.608,449.435a55.25867,55.25867,0,0,1,3.25-20.78c.92-2.55,2-5.14,1.91-7.85-.13-2.52-1.33-4.83-2.42-7.11-3.76-7.85-6.4-16.17-9-24.47l-5-15.65c-1.63018-1.19543,7.89-1.61,9.92,1.2,6.64,9.22,11.67,19.81,16.93005,29.88a50.57714,50.57714,0,0,1,3.42,7.49,41.18565,41.18565,0,0,1,1.8,12.94c0,8.19-1.07995,16.35-2.19995,24.47-.71,5.09-1.64,10.63-5.49,14C933.72793,458.435,929.708,453.435,924.608,449.435Z"
            transform="translate(-189.41599 -106.099)"
            fill="#9e616a"
          />
          <circle
            id="a7d383a2-21d6-4551-be8a-8c82a5e576cb"
            data-name="Ellipse 307"
            cx="708.75198"
            cy="314.48401"
            r="20.75"
            fill="#9e616a"
          />
          <path
            id="fb091cb1-8ad4-4d57-b74d-c940c723d6bf"
            data-name="Path 1512"
            d="M881.29986,399.881a3.602,3.602,0,0,1,.75956-3.72335c.51814-.40831,1.20624-.56062,1.7617-.95027a7.602,7.602,0,0,0,1.89952-2.40314,10.31516,10.31516,0,0,1,12.909-3.27672c3.42909,1.79484,5.49957,5.38869,8.54935,7.80841,1.54823,1.25389,3.34408,2.18449,4.90161,3.43838a20.14613,20.14613,0,0,1,6.35451,10.27787,58.31035,58.31035,0,0,1,1.7617,12.12454,10.90476,10.90476,0,0,1-.142,3.68607,10.31659,10.31659,0,0,1-1.39586,2.84979c-3.13478,4.7493-7.26645,9.0623-12.4437,11.5131s-11.47477,2.84979-16.58055.285a2.84975,2.84975,0,0,1-1.27259-1.01658,3.65791,3.65791,0,0,1-.199-2.19382,15.01763,15.01763,0,0,0-1.65284-8.40634c-.95027-1.89951-2.37516-3.53373-3.13479-5.49956a19.15971,19.15971,0,0,1-.89328-6.81979C882.39205,411.59309,882.79831,405.63756,881.29986,399.881Z"
            transform="translate(-189.41599 -106.099)"
            fill="#2d293d"
          />
          <path
            id="ef6ae9ea-be37-4bc6-b1be-067860dc7e9d"
            data-name="Path 1514"
            d="M238.747,791.149V579.808c0-2.71,3.949-4.908,8.82-4.908h39.36c4.871,0,8.82,2.2,8.82,4.908V791.7Z"
            transform="translate(-189.41599 -106.099)"
            fill="#3f3d56"
          />
          <path
            id="b4c810f7-8361-4f56-9780-d97c96bbbba4"
            data-name="Path 944"
            d="M1009.585,793.901H190.416a1,1,0,1,1,0-2h819.168a1,1,0,0,1,0,2Z"
            transform="translate(-189.41599 -106.099)"
            fill="#e6e6e6"
          />
          <path
            id="b32730d1-ac43-40b1-a176-73e18bf362e5"
            data-name="Path 1515"
            d="M628.747,790.405V293.635c0-6.371,3.949-11.536,8.82-11.536h39.36c4.871,0,8.82,5.165,8.82,11.536V791.7Z"
            transform="translate(-189.41599 -106.099)"
            fill="#a300a3"
          />
          <circle cx="627.18243" cy="265.36557" r="9" fill="#a0616a" />
          <circle cx="727.18243" cy="261.36557" r="9" fill="#a0616a" />
          <path
            d="M938.46807,478.875c.87817-.80359,8.0376-42.67377,7.99585-43.61731-.1106-5.15845-15.85-11.05-19-9-2.97187,1.93408-8.14667,24.12415-11.477,28.16529l-3.523-6.16529h-28l-1.69708,3.15174c-3.674-2.21338-6.97907-4.25409-8.15784-4.92933a5.30006,5.30006,0,0,0-1.311-.64495,20.31093,20.31093,0,0,1-8-3.76c-2.3-1.77-12.97412-20.30744-15.8341-19.81745-3.23.54-14.1247,9.96-14,19,1.37152-.02929,19.21374,35.64765,19.46411,36.97736,1.37,5.62,5.89392,87.57995,7.35394,91.4,6.726-.65,1.416-1.81,7.926,0,7.01,1.95,14.41-.16,21.64-.94a83.11362,83.11362,0,0,1,9.06-.4c11,.05,26.7.66,37.35,3.39.06006-6.98-6.06994-22.08-8.34-28.67a19.24793,19.24793,0,0,1,.03-5.94C930.23809,534.66508,936.09356,481.53978,938.46807,478.875Z"
            transform="translate(-189.41599 -106.099)"
            fill="#e6e6e6"
          />
        </svg>
      </SvgDiv>
    </SectionStyl>
  );
};

const SectionStyl = styled(motion.div)`
  min-height: 89vh;
  position: relative;
`;

const SvgDiv = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  svg {
    height: 350px;
  }
`;

const StyledDiv = styled.div`
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const Styledh2 = styled.h2`
  text-align: center;
  color: white;
  font-size: 3rem;
`;
const StyledP = styled.p`
  text-align: center;
  color: #ffffff;
  width: 40%;
  font-size: 1.5rem;
`;

const Styledh3 = styled.h3`
  text-align: center;
  color: #a300a3;
  font-size: 2rem;
  #button1 {
    margin-top: 25px;
    color: #a300a3;
    background: white;
    transition: all ease 0.5s;
    padding: 1rem 2rem;
    cursor: pointer;
    border-radius: 15px;
    border: none;
    font-family: "Roboto", sans-serif;
    font-size: 1.2rem;
    &:hover {
      color: white;
      background: purple;
    }
  }
`;

export default LoginRequest;
