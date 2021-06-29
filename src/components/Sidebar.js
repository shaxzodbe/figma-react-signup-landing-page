import styled from "styled-components";
import logo from "../assets/logo.svg";
import Input from "./Input";

const Sidebar = () => {
  return (
    <Container>
      <LogoWrapper>
        <img src={logo} alt="" />
        <h3>
          Eli <span>Codes</span>
        </h3>
      </LogoWrapper>
      <Form>
        <h3>Sign up</h3>
        <Input placeholder="Full Name" />
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <Input type="password" placeholder="Confirm Password" />
        <button>Sign Up</button>
      </Form>
      <div>
        <Terms>
          By signing up, I agree to the Privacy Policy <br /> and Terms of
          Service
        </Terms>
        <h4>
          Already have an account? <span>Sign In</span>
        </h4>
      </div>
    </Container>
  );
};

const Terms = styled.p`
  margin: 0;
  padding: 0 1rem;
  text-align: center;
  font-size: 10px;
  color: #808080;
  font-weight: 300;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  h3 {
    margin-top: 0;
    color: #666666;
    margin-bottom: 2rem;
  }
  button {
    width: 75%;
    max-width: 380px;
    min-width: 250px;
    height: 40px;
    margin: 1rem 0;
    box-shadow: 0px 14px 31px -23px #00000040;
    border: none;
    border-radius: 11px;
    background-color: #70edb9;
    padding: 0 1rem;
    font-family: inherit;
    font-weight: 500;
    color: #fff;
    cursor: pointer;
    transition: 0.2s ease-in;
    outline: none;

    &:hover {
      transform: translateY(-1px);
      border: none;
      box-shadow: 0px 1px 10px 0px #00000040;
    }
  }
`;

const LogoWrapper = styled.div`
  /* margin-top: 2rem; */
  img {
    display: block;
    margin: auto;
    height: 6rem;
  }
  h3 {
    text-align: center;
    color: #ff8d8d;
    font-weight: 700;
    font-size: 31px;
    margin-top: 0;
    line-height: 33px;
    span {
      color: #5dc399;
      font-weight: 300;
      font-size: 28px;
    }
  }
`;

const Container = styled.div`
  min-width: 400px;
  height: 100%;
  backdrop-filter: blur(20px);
  background-color: rgba(255, 255, 255, 0.8);
  background-size: cover;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 0 2rem;

  @media (max-width: 900px) {
    width: 100vw;
    position: absolute;
    padding: 0;
  }
  h4 {
    color: #808080;
    font-weight: 700;
    font-size: 13px;
    margin: 2rem 0 4rem;
    span {
      color: #ff8d8d;
      cursor: pointer;
    }
  }
`;

export default Sidebar;
