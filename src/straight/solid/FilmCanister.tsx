import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FilmCanister = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m14,22h2v2H0v-2h2V2H0V0h16v2h-2v20ZM22,6v2h2v8h-2v2h2v2h-8V4h8v2h-2Zm-2,10h-2v2h2v-2Zm0-10h-2v2h2v-2Z"/></svg>

);
