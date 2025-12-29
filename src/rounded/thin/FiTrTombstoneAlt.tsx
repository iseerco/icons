import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrTombstoneAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m23.5,23h-1.5v-13C22,4.486,17.514,0,12,0S2,4.486,2,10v13H.5c-.276,0-.5.224-.5.5s.224.5.5.5h23c.276,0,.5-.224.5-.5s-.224-.5-.5-.5ZM3,10C3,5.037,7.038,1,12,1s9,4.037,9,9v13H3v-13Z"/></svg>

);
