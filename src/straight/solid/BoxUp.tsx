import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const BoxUp = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21,0H3C1.346,0,0,1.346,0,3V24H24V3c0-1.654-1.346-3-3-3Zm-1,21H8v-2h12v2Zm.041-7.887l-2.041-2.041v5.928h-2v-5.928l-2,2-2-2v5.928h-2v-5.928l-2.092,2.092-1.414-1.414,3.215-3.215c.712-.712,1.871-.712,2.583,0l1.708,1.708,1.708-1.708c.712-.712,1.871-.712,2.583,0l3.164,3.164-1.414,1.414Z"/></svg>

);
