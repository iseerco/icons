import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const RulerCombined = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M19,15v4h-2v-4h-2v4h-2v-4h-2v4h-2v-4H5v-2h4v-2H5v-2h4v-2H5v-2h4V0H3C1.346,0,0,1.346,0,3V21c0,1.654,1.346,3,3,3H21c1.654,0,3-1.346,3-3v-6h-5Z"/></svg>

);
