"use client"
import { useEffect, useRef, useState } from 'react';
import * as React from 'react';
import './ScrollReveal.css';

interface ScrollRevealProps {
  sentence: string[];
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({ sentence }) => {
  const [revealedWords, setRevealedWords] = useState<string[]>([]);
  const sentenceRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (sentenceRef.current) {
      const { top, bottom } = sentenceRef.current.getBoundingClientRect();
      if (top < window.innerHeight && bottom > 0) {
        const wordsToReveal = sentence.filter(word => !revealedWords.includes(word));
        if (wordsToReveal.length > 0) {
          setRevealedWords(prevWords => [...prevWords, wordsToReveal[0]]);
        }
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="my-background" ref={sentenceRef}>
      <h2 className="scroll-reveal">
        {sentence.map((word, index) => (
          <span key={index} className={revealedWords.includes(word) ? 'reveal' : ''}>
            {word}
          </span>
        ))}
      </h2>
    </div>
  );
};

export default ScrollReveal;
