import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const LevelDown = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M16.75,17.293,13,21.042V3a3,3,0,0,0-3-3H0V2H10a1,1,0,0,1,1,1V21.042L7.25,17.293,5.836,18.707l4.677,4.677a2.1,2.1,0,0,0,2.973,0l4.678-4.677Z"/></svg>

);
