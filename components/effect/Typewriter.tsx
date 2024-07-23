// components/Typewriter.js
import { useState, useEffect } from 'react';

type TypewriterProps = {
  textArray: string[];
  typingSpeed?: number;
  delayBetweenLines?: number;
};

const Typewriter = ({
  textArray,
  typingSpeed = 50,
  delayBetweenLines = 300,
}: TypewriterProps) => {
  const [currentText, setCurrentText] = useState('');
  const [currentLine, setCurrentLine] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (currentLine < textArray.length) {
      if (charIndex < textArray[currentLine].length) {
        const timeout = setTimeout(() => {
          setCurrentText((prev) => prev + textArray[currentLine][charIndex]);
          setCharIndex(charIndex + 1);
        }, typingSpeed);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setCurrentText((prev) => prev + '\n');
          setCurrentLine(currentLine + 1);
          setCharIndex(0);
        }, delayBetweenLines);
        return () => clearTimeout(timeout);
      }
    }
  }, [textArray, charIndex, currentLine, typingSpeed, delayBetweenLines]);

  return <div style={{ whiteSpace: 'pre-wrap' }}>{currentText}</div>;
};

export default Typewriter;
