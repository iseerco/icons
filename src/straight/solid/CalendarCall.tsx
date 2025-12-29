import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CalendarCall = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m21.287,19.114l-1.775,1.775c-2.027-.773-3.521-2.208-4.403-4.403l1.775-1.775-2.712-2.712-1.378,1.378c-.54.539-.795,1.249-.795,1.957,0,3.914,5.032,8.665,8.665,8.665.708,0,1.418-.256,1.957-.795l1.378-1.378-2.712-2.712h-.001ZM0,8v-3c0-1.654,1.346-3,3-3h3V0h2v2h8V0h2v2h3c1.654,0,3,1.346,3,3v3H0Zm15.002,2h8.998v8.999l-8.998-8.999Zm.271,14H0v-14h13.344l-1.962,1.962c-.891.89-1.382,2.087-1.382,3.373,0,3.097,2.327,6.549,5.273,8.665Z"/>
</svg>

);
