import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FilmCanister = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m20,4h-6v-2h1c.552,0,1-.448,1-1s-.448-1-1-1H1C.448,0,0,.448,0,1s.448,1,1,1h1v20h-1c-.552,0-1,.448-1,1s.448,1,1,1h14c.552,0,1-.448,1-1s-.448-1-1-1h-1v-2h6c2.206,0,4-1.794,4-4v-8c0-2.206-1.794-4-4-4Zm2,4h-3v-2h1c1.103,0,2,.897,2,2Zm-8,6v-4h8v4h-8Zm3-8v2h-3v-2h3ZM4,22V2h8v20H4Zm10-6h3v2h-3v-2Zm6,2h-1v-2h3c0,1.103-.897,2-2,2Z"/></svg>

);
