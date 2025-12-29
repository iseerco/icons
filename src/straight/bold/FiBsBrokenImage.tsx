import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsBrokenImage = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M16.38,0H5c-1.65,0-3,1.35-3,3V24H22V5.66L16.38,0Zm-2.38,3v5h5v5.36l-2.98-2.98-4,4-4-4-3.02,3.02V3H14ZM5,21v-3.36l3.02-3.02,4,4,4-4,2.98,2.98v3.4H5Z"/></svg>

);
