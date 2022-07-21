import React, { useState } from "react";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";

const Wrapper = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
`;

const Box = styled(motion.div)`
  background-color: gray; ;
`;

function App() {
  const item = { id: Date.now(), subtitle: "subtitle", title: "title" };
  const items = [item, item, item, item];
  const [selectedId, setSelectedId] = useState("");
  return (
    <Wrapper>
      {items.map((item) => (
        <Box
          layoutId={item.id + ""}
          onClick={() => setSelectedId(item.id + "")}
        >
          <motion.h5>{item.subtitle}</motion.h5>
          <motion.h2>{item.title}</motion.h2>
        </Box>
      ))}

      <AnimatePresence>
        {selectedId && (
          <motion.div layoutId={selectedId}>
            <motion.h5>{item.subtitle}</motion.h5>
            <motion.h2>{item.title}</motion.h2>
            <motion.button onClick={() => setSelectedId("")} />
          </motion.div>
        )}
      </AnimatePresence>
    </Wrapper>
  );
}

export default App;
