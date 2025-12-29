import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsTombstoneAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m22,23v-13C22,4.486,17.514,0,12,0S2,4.486,2,10v13H0v1h24v-1h-2ZM3,10C3,5.037,7.038,1,12,1s9,4.037,9,9v13H3v-13Z"/></svg>

);
