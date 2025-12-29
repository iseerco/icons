import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsFilmCanister = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m24,2h-10V0H0v3h2v18H0v3h14v-2h10V2Zm-3,5h-2v-2h2v2Zm-7,0v-2h2v2h-2Zm0,10h2v2h-2v-2Zm0-3v-4h7v4h-7ZM5,3h6v18h-6V3Zm14,16v-2h2v2h-2Z"/></svg>

);
