import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const PauseSquare = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M19,0H5C2.243,0,0,2.243,0,5v14c0,2.757,2.243,5,5,5h14c2.757,0,5-2.243,5-5V5c0-2.757-2.243-5-5-5ZM11,16c0,.553-.448,1-1,1s-1-.447-1-1V8c0-.552,.448-1,1-1s1,.448,1,1v8Zm4,0c0,.553-.447,1-1,1s-1-.447-1-1V8c0-.552,.447-1,1-1s1,.448,1,1v8Z"/>
</svg>

);
