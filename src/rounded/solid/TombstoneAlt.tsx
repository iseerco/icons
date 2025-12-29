import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const TombstoneAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m23,22h-1v-12C22,4.486,17.514,0,12,0S2,4.486,2,10v12h-1c-.552,0-1,.447-1,1s.448,1,1,1h22c.552,0,1-.447,1-1s-.448-1-1-1Z"/></svg>

);
