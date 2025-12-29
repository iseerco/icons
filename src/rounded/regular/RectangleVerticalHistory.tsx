import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const RectangleVerticalHistory = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m19,0h-4c-2.757,0-5,2.243-5,5v14c0,2.757,2.243,5,5,5h4c2.757,0,5-2.243,5-5V5c0-2.757-2.243-5-5-5Zm3,19c0,1.654-1.346,3-3,3h-4c-1.654,0-3-1.346-3-3V5c0-1.654,1.346-3,3-3h4c1.654,0,3,1.346,3,3v14ZM7,4v17c0,.552-.448,1-1,1s-1-.448-1-1V4c0-.552.448-1,1-1s1,.448,1,1Zm-5,3v11c0,.552-.448,1-1,1s-1-.448-1-1V7c0-.552.448-1,1-1s1,.448,1,1Z"/>
</svg>

);
