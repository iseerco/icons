import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Ghost = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m12,0C6.486,0,2,4.486,2,10v14h2c0-1.103.897-2,2-2s2,.897,2,2h2c0-1.103.897-2,2-2s2,.897,2,2h2c0-1.103.897-2,2-2s2,.897,2,2h2v-14C22,4.486,17.514,0,12,0Zm-3.5,12c-.828,0-1.5-.672-1.5-1.5s.672-1.5,1.5-1.5,1.5.672,1.5,1.5-.672,1.5-1.5,1.5Zm7,0c-.828,0-1.5-.672-1.5-1.5s.672-1.5,1.5-1.5,1.5.672,1.5,1.5-.672,1.5-1.5,1.5Z"/></svg>

);
