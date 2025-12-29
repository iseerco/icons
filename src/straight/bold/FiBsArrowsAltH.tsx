import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsArrowsAltH = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M23.555,10.924l-5.555-5.083v4.659H6V5.841L.445,10.924c-.593,.532-.593,1.461,0,1.993l5.555,5.083v-4.5h12v4.5l5.555-5.083c.593-.532,.593-1.461,0-1.993Z"/></svg>

);
