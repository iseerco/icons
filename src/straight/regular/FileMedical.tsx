import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FileMedical = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m14.414,0H5c-1.654,0-3,1.346-3,3v21h20V7.586L14.414,0Zm.586,3.414l3.586,3.586h-3.586v-3.586ZM4,22V3c0-.551.449-1,1-1h8v7h7v13H4Zm9-7h3v2h-3v3h-2v-3h-3v-2h3v-3h2v3Z"/></svg>

);
