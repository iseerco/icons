import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Paste = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21,9h-6c-1.65,0-3,1.35-3,3v12h12V12c0-1.65-1.35-3-3-3Zm0,10h-6v-2h6v2Zm0-4h-6v-2h6v2ZM10,4h-2c-1.1,0-2-.9-2-2s.9-2,2-2h2c1.1,0,2,.9,2,2s-.9,2-2,2Zm5-2c1.66,0,3,1.34,3,3v2h-3c-2.76,0-5,2.24-5,5v12H0V5c0-1.66,1.34-3,3-3h1c0,2.21,1.79,4,4,4h2c2.21,0,4-1.79,4-4h1Z"/></svg>

);
