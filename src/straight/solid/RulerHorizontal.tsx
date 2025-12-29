import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const RulerHorizontal = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21,7H3c-1.654,0-3,1.346-3,3v7H5v-4h2v4h2v-4h2v4h2v-4h2v4h2v-4h2v4h5v-7c0-1.654-1.346-3-3-3Z"/></svg>

);
