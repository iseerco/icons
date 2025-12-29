import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsFloppyDisks = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m3,21h15v3H0v-15.5c0-1.758,1.308-3.204,3-3.449v15.949Zm11-13c-1.657,0-3,1.343-3,3s1.343,3,3,3,3-1.343,3-3-1.343-3-3-3Zm10-1.394v12.394H5V3.5c0-1.93,1.57-3.5,3.5-3.5h8.895c.935,0,1.813.364,2.475,1.025l3.105,3.106c.661.661,1.025,1.54,1.025,2.475Zm-3,0c0-.131-.054-.26-.146-.354l-2.854-2.854v2.602h-8v-3h-1.5c-.275,0-.5.224-.5.5v12.5h13V6.606Z"/>
</svg>

);
