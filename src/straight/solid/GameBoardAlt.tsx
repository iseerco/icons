import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const GameBoardAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M13,0h8a3,3,0,0,1,3,3v8H13ZM11,0h-.959L0,10.041V11H3.172L11,3.172Zm2,18,5-5H13Zm11-5H20.828L13,20.828V24h.959L24,13.959ZM11,13H0V24H11Zm0-7L6,11h5Zm5.787,18H24V16.787ZM7.213,0H3A3,3,0,0,0,0,3V7.213Z"/></svg>

);
