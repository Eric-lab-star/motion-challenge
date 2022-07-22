import React, { useState } from "react";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import "reset-css";

const App1 = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
  background-color: #e78999;
`;
const Wrapper = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  margin-bottom: 100px;
`;

const Box = styled(motion.div)`
  background-color: #fffefea2;
  height: 200px;
  width: 350px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Circle = styled(motion.div)`
  background-color: #413d90;
  border-radius: 50%;
  width: 100px;
  height: 100px;
`;
const ClickedBox = styled(motion.div)`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: #19111160;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const custom = {
  visible: {},
  hidden: { opacity: 0 },
};

function App() {
  const [selectedId, setSelectedId] = useState("");
  const [clicked, setClicked] = useState(false);
  return (
    <App1>
      <Wrapper>
        <Box
          whileHover={{ scale: 1.1 }}
          layoutId={"1"}
          animate="visible"
          variants={custom}
          initial={{ originX: 1, originY: 1 }}
          onClick={() => setSelectedId("1")}
        ></Box>
        <Box
          whileHover={{ scale: 1.1 }}
          initial={{ originX: 0, originY: 1 }}
          layoutId={"2"}
          onClick={() => setSelectedId("2")}
          style={{ transformOrigin: `bottom left` }}
        >
          {!clicked && <Circle layoutId="circle" />}
        </Box>
        <Box
          whileHover={{ scale: 1.1 }}
          initial={{ originX: 1, originY: 0 }}
          layoutId={"3"}
          onClick={() => setSelectedId("3")}
          style={{ transformOrigin: `top right` }}
        >
          {clicked && <Circle layoutId="circle" />}
        </Box>
        <Box
          whileHover={{ scale: 1.1 }}
          layoutId={"4"}
          initial={{ originX: 0, originY: 0 }}
          onClick={() => setSelectedId("4")}
          style={{ transformOrigin: `top left` }}
        ></Box>
      </Wrapper>
      <AnimatePresence>
        {selectedId && (
          <ClickedBox onClick={() => setSelectedId("")}>
            <Box
              animate={{ backgroundColor: "white" }}
              exit={{ opacity: 0 }}
              layoutId={selectedId}
              onClick={() => setSelectedId("")}
            ></Box>
          </ClickedBox>
        )}
      </AnimatePresence>
      <motion.button
        whileTap={{ color: "blue", scale: 1.2 }}
        initial={{ color: "orange" }}
        style={{ borderStyle: "none", borderRadius: "10px", padding: "10px" }}
        onClick={() => setClicked((prev) => (prev = !prev))}
      >
        switch
      </motion.button>
    </App1>
  );
}

export default App;
