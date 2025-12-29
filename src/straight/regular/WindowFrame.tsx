import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const WindowFrame = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m22,22V3c0-1.654-1.346-3-3-3H5c-1.654,0-3,1.346-3,3v19H0v2h24v-2h-2Zm-2,0h-7v-9h7v9Zm0-19v8h-7V2h6c.551,0,1,.449,1,1Zm-15-1h6v9h-7V3c0-.551.449-1,1-1Zm-1,11h7v9h-7v-9Z"/>
</svg>

);
