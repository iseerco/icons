import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Stairs = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24,1c0,.552-.447,1-1,1h-4c-.552,0-1,.449-1,1v4c0,.552-.447,1-1,1h-3c-.552,0-1,.449-1,1v3c0,.552-.448,1-1,1h-3c-.551,0-1,.449-1,1v3c0,.552-.448,1-1,1H3c-.551,0-1,.449-1,1v4c0,.552-.448,1-1,1s-1-.448-1-1v-4c0-1.654,1.346-3,3-3h3v-2c0-1.654,1.346-3,3-3h2v-2c0-1.654,1.346-3,3-3h2v-3c0-1.654,1.346-3,3-3h4c.553,0,1,.448,1,1Z"/>
</svg>

);
