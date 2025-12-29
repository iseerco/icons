import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const RectangleVerticalHistory = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m19,24h-4c-2.757,0-5-2.243-5-5V5c0-2.757,2.243-5,5-5h4c2.757,0,5,2.243,5,5v14c0,2.757-2.243,5-5,5Zm-12-3V4c0-.552-.448-1-1-1s-1,.448-1,1v17c0,.552.448,1,1,1s1-.448,1-1Zm-5-3V7c0-.552-.448-1-1-1s-1,.448-1,1v11c0,.552.448,1,1,1s1-.448,1-1Z"/>
</svg>

);
