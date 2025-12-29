import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const BookSpells = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m11,12.5l2.333-1.167,1.167-2.333,1.167,2.333,2.333,1.167-2.333,1.167-1.167,2.333-1.167-2.333-2.333-1.167Zm-2.5-2l1-2,2-1-2-1-1-2-1,2-2,1,2,1,1,2ZM22,2v22H5c-1.654,0-3-1.346-3-3V3c0-1.654,1.346-3,3-3h15c1.103,0,2,.897,2,2ZM4,3v15.172c.313-.111.649-.172,1-.172h15V2H5c-.551,0-1,.449-1,1Zm16,19v-2H5c-.551,0-1,.449-1,1s.449,1,1,1h15Z"/></svg>

);
