import React from "react";

interface TextBounceProps {
  text: string;
  as?: React.ElementType;
  className?: string;
}

export const TextBounce: React.FC<TextBounceProps> = ({
  text,
  as: Wrapper = "span",
  className = "",
}) => {
  return (
    <Wrapper
      className={`inline-block animate-bounce-once ${className}`}
      style={{
        animationTimingFunction: "ease-out",
        animationDuration: "0.6s",
        animationFillMode: "both",
        animationName: "bounce-once",
      }}
    >
      {text}
      <style>{`
        @keyframes bounce-once {
          0%   { transform: translateY(0); opacity: 0; }
          50%  { transform: translateY(-0.3em); opacity: 1; }
          100% { transform: translateY(0); opacity: 1; }
        }
      `}</style>
    </Wrapper>
  );
};
