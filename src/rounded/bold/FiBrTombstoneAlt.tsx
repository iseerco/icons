import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrTombstoneAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m22.5,21h-.5v-11C22,4.486,17.514,0,12,0S2,4.486,2,10v11h-.5c-.829,0-1.5.672-1.5,1.5s.671,1.5,1.5,1.5h21c.829,0,1.5-.672,1.5-1.5s-.671-1.5-1.5-1.5ZM5,10c0-3.859,3.14-7,7-7s7,3.141,7,7v11H5v-11Z"/></svg>

);
