import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FilmCanister = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m24,6v-2h-10v-2h2V0H0v2h2v20H0v2h16v-2h-2v-2h10v-2h-2v-2h2v-8h-2v-2h2Zm-8,0v2h-2v-2h2ZM4,22V2h8v20H4Zm10-6h2v2h-2v-2Zm6,2h-2v-2h2v2Zm2-4h-8v-4h8v4Zm-2-6h-2v-2h2v2Z"/></svg>

);
