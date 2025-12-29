import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Tubes = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m10,0H2C1.448,0,1,.447,1,1s.448,1,1,1v18c0,2.206,1.794,4,4,4s4-1.794,4-4V2c.552,0,1-.447,1-1s-.448-1-1-1Zm-4,22c-1.103,0-2-.897-2-2v-9h4v9c0,1.103-.897,2-2,2Zm2-13H4V2h4v7ZM22,0h-8c-.552,0-1,.447-1,1s.448,1,1,1v18c0,2.206,1.794,4,4,4s4-1.794,4-4V2c.552,0,1-.447,1-1s-.448-1-1-1Zm-4,22c-1.103,0-2-.897-2-2v-9h4v9c0,1.103-.897,2-2,2Zm2-13h-4V2h4v7Z"/></svg>

);
