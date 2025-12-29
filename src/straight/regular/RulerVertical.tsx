import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const RulerVertical = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M10,0c-1.654,0-3,1.346-3,3V21c0,1.654,1.346,3,3,3h7V0h-7Zm0,22c-.552,0-1-.448-1-1V3c0-.552,.448-1,1-1h5v3h-3v2h3v2h-3v2h3v2h-3v2h3v2h-3v2h3v3h-5Z"/></svg>

);
