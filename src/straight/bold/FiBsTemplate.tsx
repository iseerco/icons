import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsTemplate = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M16.38,0H5c-1.65,0-3,1.35-3,3V24H22V5.66L16.38,0ZM5,21V3H14v5h5v13H5Zm2-11h10v9H7V10Zm5-2H7v-3h5v3Z"/></svg>

);
