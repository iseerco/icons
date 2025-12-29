import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const NoteMedical = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><polygon points="18 24 18 18 24 18 18 24"/><path d="m0,3v21h16v-8h8V3c0-1.657-1.343-3-3-3H3C1.343,0,0,1.343,0,3Zm16,10h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2Z"/></svg>

);
