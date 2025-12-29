import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Chalkboard = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m23,19v-11c0-2.757-2.243-5-5-5H6c-2.757,0-5,2.243-5,5v11c-.552,0-1,.447-1,1s.448,1,1,1h22c.552,0,1-.447,1-1s-.448-1-1-1Zm-5,0h-3c-.552,0-1-.447-1-1s.448-1,1-1h3c.552,0,1,.447,1,1s-.448,1-1,1Z"/>
</svg>

);
