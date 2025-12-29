import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const DiceThree = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21,0H3A3,3,0,0,0,0,3V24H24V3A3,3,0,0,0,21,0ZM7,8A1,1,0,1,1,8,7,1,1,0,0,1,7,8Zm5,5a1,1,0,1,1,1-1A1,1,0,0,1,12,13Zm5,5a1,1,0,1,1,1-1A1,1,0,0,1,17,18Z"/></svg>

);
