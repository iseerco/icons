import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const DiceThree = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M19,0H5A5.006,5.006,0,0,0,0,5V19a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V5A5.006,5.006,0,0,0,19,0ZM7,8A1,1,0,1,1,8,7,1,1,0,0,1,7,8Zm5,5a1,1,0,1,1,1-1A1,1,0,0,1,12,13Zm5,5a1,1,0,1,1,1-1A1,1,0,0,1,17,18Z"/></svg>

);
