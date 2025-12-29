import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Nfc = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21,0H3C1.35,0,0,1.35,0,3V24H24V3c0-1.65-1.35-3-3-3Zm0,21H3V3h5.41l-3.41,3.41v12.59h14V5h-6.09l-2.91,2.91v6.09h4v-5h2v7H8V7.09L12.09,3h8.91V21Z"/></svg>

);
