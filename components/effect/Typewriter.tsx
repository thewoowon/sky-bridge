import { useState, useEffect, memo } from 'react';

type TypewriterProps = {
  textArray: string[];
  typingSpeed?: number;
  delayBetweenLines?: number;
  onComplete?: () => void;
};

const Typewriter = ({
  textArray,
  typingSpeed = 50,
  delayBetweenLines = 300,
  onComplete,
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
    } else if (currentLine === textArray.length && onComplete) {
      onComplete();
    }
  }, [
    textArray,
    charIndex,
    currentLine,
    typingSpeed,
    delayBetweenLines,
    onComplete,
    currentText,
  ]);

  return <div style={{ whiteSpace: 'pre-wrap' }}>{currentText}</div>;
};

export default memo(Typewriter);
