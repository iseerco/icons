import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const HandBackPointDown = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M8,0L2.952,5.045c-.46,.441-.774,1.012-.9,1.637-.185,.976,.125,1.98,.828,2.682l3.121,3.025V7h2v14.5c0,1.381,1.119,2.5,2.5,2.5s2.5-1.119,2.5-2.5v-5.681l9-2.014V0H8Z"/></svg>

);
