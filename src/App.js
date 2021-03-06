import React from "react";
import Lesson from "./React&Redux/Context";
import Collapse from "./react-collapse/Collapse";
import Footer from "./components/footer/Footer";
import InlineSVGSComponent from "./react_inline_svg/inline_svgs";
import styled from "styled-components";

const Container = styled.div`
  max-width: 1366px;
  width: 100%;
  margin: 0 auto;
`;

function App() {
  return (
    <div>
      <Container>
        <Lesson />
        <Collapse />
        <InlineSVGSComponent />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
