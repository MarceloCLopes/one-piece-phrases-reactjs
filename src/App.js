import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { Quotes } from "./components";
import { getQuote } from "./services";
import oneSound from "./assets/sounds/sounds.mp3";

const audio = new Audio(oneSound);

export function App() {
  const isMounted = useRef(true);

  const [quoteState, setQuoteState] = useState({
    quote: "loading quote...",
    speaker: "loading speaker",
  });

  const onUpdate = async () => {
    const quote = await getQuote();

    if (isMounted.current) {
      audio.play();
      setQuoteState(quote);
    }
  };

  useEffect(() => {
    onUpdate();

    return () => {
      isMounted.current = false;
    };
  }, []);

  return (
    <Content>
      <Quotes {...quoteState} onUpdate={onUpdate} />
    </Content>
  );
}

const Content = styled.div`
  height: 100vh;
  padding: 0 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
