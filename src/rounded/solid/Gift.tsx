import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Gift = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M2,15h9v9H7a5,5,0,0,1-5-5Zm22-4a2,2,0,0,1-2,2H13V8.957c-.336.026-.671.043-1,.043s-.664-.017-1-.043V13H2a2,2,0,0,1-2-2A4,4,0,0,1,4,7H5.738A5.137,5.137,0,0,1,4,3,1,1,0,0,1,6,3c0,2.622,2.371,3.53,4.174,3.841A9.332,9.332,0,0,1,9,3a3,3,0,0,1,6,0,9.332,9.332,0,0,1-1.174,3.841C15.629,6.53,18,5.622,18,3a1,1,0,0,1,2,0,5.137,5.137,0,0,1-1.738,4H20A4,4,0,0,1,24,11ZM11,3a7.71,7.71,0,0,0,1,3.013A7.71,7.71,0,0,0,13,3a1,1,0,0,0-2,0Zm2,21h4a5,5,0,0,0,5-5V15H13Z"/></svg>

);
