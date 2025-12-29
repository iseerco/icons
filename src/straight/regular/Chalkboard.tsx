import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Chalkboard = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m23,19V6c0-1.654-1.346-3-3-3H4c-1.654,0-3,1.346-3,3v13H0v2h24v-2h-1Zm-9-2v2H3V6c0-.552.449-1,1-1h16c.551,0,1,.448,1,1v13h-3v-2h-4Z"/>
</svg>

);
