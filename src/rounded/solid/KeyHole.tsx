import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const KeyHole = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M16.027,24H8c-1.839,.048-3.34-1.814-2.904-3.601l2.387-8.051c-1.978-1.67-2.88-4.305-2.313-6.909C5.738,2.831,7.876,.709,10.49,.159c2.114-.446,4.271,.067,5.918,1.403,1.647,1.337,2.592,3.319,2.592,5.438,0,2.074-.915,4.022-2.48,5.346l2.393,7.978c.465,1.868-1.006,3.703-2.885,3.676Z"/>
</svg>

);
