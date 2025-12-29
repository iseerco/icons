import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsInsertCreditCard = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M24,3.5c0-1.93-1.57-3.5-3.5-3.5H3.5C1.57,0,0,1.57,0,3.5c0,1.758,1.308,3.204,3,3.449V24H21V6.949c1.692-.245,3-1.691,3-3.449ZM10,1V23h-2V1h2ZM1,3.5c0-1.207,.86-2.217,2-2.449V5.949c-1.14-.232-2-1.242-2-2.449ZM4,1h3V23h-3V1Zm7,22V1h9V23H11ZM21,5.949V1.051c1.14,.232,2,1.242,2,2.449s-.86,2.217-2,2.449Zm-5,11.108c-1.103,0-2,.897-2,2s.897,2,2,2,2-.897,2-2-.897-2-2-2Zm0,3c-.552,0-1-.449-1-1s.448-1,1-1,1,.449,1,1-.448,1-1,1Z"/>
</svg>

);
