import { useEffect, useState } from 'react';

const TypingEffect = ({ words, typingSpeed = 125, deletingSpeed = 50, delayBetweenWords = 2000 }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    
    const handleTyping = () => {
      if (isDeleting) {
        setText((prev) => prev.slice(0, -1));
      } else {
        setText((prev) => currentWord.slice(0, prev.length + 1));
      }

      if (!isDeleting && text === currentWord) {
        setTimeout(() => setIsDeleting(true), delayBetweenWords);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, currentWordIndex, words, typingSpeed, deletingSpeed, delayBetweenWords]);

  return (
    <span className="text-[#214d65] font-extrabold text-5xl">{text}<span className="animate-pulse">|</span></span>
  );
};

export default TypingEffect;
