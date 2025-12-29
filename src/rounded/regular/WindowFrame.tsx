import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const WindowFrame = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m23,22h-1V5c0-2.757-2.243-5-5-5H7C4.243,0,2,2.243,2,5v17h-1c-.552,0-1,.448-1,1s.448,1,1,1h22c.552,0,1-.448,1-1s-.448-1-1-1Zm-3,0h-7v-9h7v9Zm0-17v6h-7V2h4c1.654,0,3,1.346,3,3ZM7,2h4v9h-7v-6c0-1.654,1.346-3,3-3Zm-3,11h7v9h-7v-9Z"/>
</svg>

);
