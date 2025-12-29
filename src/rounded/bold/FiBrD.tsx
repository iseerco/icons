import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrD = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M10.5,24h-3c-3.032,0-5.5-2.467-5.5-5.5V5.5C2,2.467,4.468,0,7.5,0h3c6.341,0,11.5,5.159,11.5,11.5v1c0,6.341-5.159,11.5-11.5,11.5ZM7.5,3c-1.379,0-2.5,1.122-2.5,2.5v13c0,1.378,1.121,2.5,2.5,2.5h3c4.687,0,8.5-3.813,8.5-8.5v-1c0-4.687-3.813-8.5-8.5-8.5h-3Z"/></svg>

);
