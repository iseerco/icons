import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const BookMedical = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m20,0H5c-1.654,0-3,1.346-3,3v18c0,1.654,1.346,3,3,3h17V2c0-1.103-.897-2-2-2Zm0,18h-12V2h12v16ZM5,2h1v16h-1c-.351,0-.687.061-1,.172V3c0-.551.448-1,1-1Zm0,20c-.552,0-1-.449-1-1s.448-1,1-1h15v2H5Zm5-13h3v-3h2v3h3v2h-3v3h-2v-3h-3v-2Z"/></svg>

);
