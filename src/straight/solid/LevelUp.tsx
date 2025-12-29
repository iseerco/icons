import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const LevelUp = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M16.75,6.707,13,2.958V21a3,3,0,0,1-3,3H0V22H10a1,1,0,0,0,1-1V2.958L7.25,6.707,5.836,5.293,10.513.616a2.1,2.1,0,0,1,2.973,0l4.678,4.677Z"/></svg>

);
