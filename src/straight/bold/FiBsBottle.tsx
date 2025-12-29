import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsBottle = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M18.814,7.84,16,6.151V3h1V0H7V3H8V6.151L5.185,7.839A4.523,4.523,0,0,0,3,11.7V24H21V11.7A4.519,4.519,0,0,0,18.814,7.84ZM18,21H6V11.7a1.508,1.508,0,0,1,.728-1.286L11,7.849V3h2V7.849l4.271,2.564A1.5,1.5,0,0,1,18,11.7ZM8,14h8v4H8Z"/></svg>

);
