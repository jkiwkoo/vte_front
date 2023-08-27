import { useEffect, useRef, useState } from 'react';

type AnimatedTextProps = {
  text: string;
  isSmall?: boolean;
  isGray?: boolean;
  noMargin?: boolean;
};

export const AnimatedText = ({
  text,
  noMargin,
  isSmall,
  isGray,
}: AnimatedTextProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(({ target, isIntersecting }) => {
          target === ref.current ? setVisible(isIntersecting) : null;
        });
      },
      {
        threshold: 0.5,
      },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      className={`${
        visible ? 'opacity-100 animate-fade-in-down' : 'opacity-0'
      } ${isSmall ? 'text-[16px]' : isGray ? 'text-[18px]' : 'text-[20px]'} ${
        isGray ? 'text-vte-gray-3' : 'text-white'
      } ${!noMargin ? 'mb-[20px]' : null}`}
      ref={ref}
    >
      {text}
    </div>
  );
};
