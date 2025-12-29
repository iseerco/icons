import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const BoxUp = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21,0H3C1.346,0,0,1.346,0,3V24H24V3c0-1.654-1.346-3-3-3Zm1,22H2V3c0-.551,.449-1,1-1H21c.551,0,1,.449,1,1V22Zm-14-4h12v2H8v-2ZM18.292,7.535l3.164,3.164-1.414,1.414-2.041-2.041v5.928h-2v-5.928l-2,2-2-2v5.928h-2v-5.928l-2.092,2.092-1.414-1.414,3.215-3.215c.712-.712,1.871-.712,2.583,0l1.708,1.708,1.708-1.708c.712-.712,1.871-.712,2.583,0Z"/></svg>

);
