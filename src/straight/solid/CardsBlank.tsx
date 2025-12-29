import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CardsBlank = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M13,4H3c-1.654,0-3,1.346-3,3V24H16V7c0-1.654-1.346-3-3-3Zm10.88,2.693l-4.781,16.414-1.099-.409V7c0-2.757-2.243-5-5-5h-4.243c.243-.691,.72-1.271,1.373-1.63,.705-.385,1.515-.473,2.283-.25l9.436,2.856c1.577,.459,2.492,2.128,2.03,3.716Z"/>
</svg>

);
