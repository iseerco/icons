import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FilesMedical = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m22,4.139L17.861,0h-7.861c-1.654,0-3,1.346-3,3v1h-2c-1.654,0-3,1.346-3,3v17h16v-5h4V4.139Zm-6,17.861H4V7c0-.551.449-1,1-1h2v13h9v3Zm-7-5V3c0-.551.449-1,1-1h6v4h4v11h-11Zm6.5-7h2.5v2h-2.5v2.5h-2v-2.5h-2.5v-2h2.5v-2.5h2v2.5Z"/></svg>

);
