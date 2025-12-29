import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Tubes = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m1,2h1v18c0,2.206,1.794,4,4,4s4-1.794,4-4V2h1V0H1v2Zm5,20c-1.103,0-2-.897-2-2v-9h4v9c0,1.103-.897,2-2,2Zm2-13h-4V2h4v7ZM23,0h-10v2h1v18c0,2.206,1.794,4,4,4s4-1.794,4-4V2h1V0Zm-5,22c-1.103,0-2-.897-2-2v-9h4v9c0,1.103-.897,2-2,2Zm2-13h-4V2h4v7Z"/></svg>

);
