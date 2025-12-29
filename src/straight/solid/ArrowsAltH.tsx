import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ArrowsAltH = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M23.555,10.924l-5.555-5.083v5.159H6V5.841L.445,10.924c-.593,.532-.593,1.461,0,1.993l5.555,5.083v-5h12v5l5.555-5.083c.593-.532,.593-1.461,0-1.993Z"/></svg>

);
