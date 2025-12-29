import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const TachometerAltSlowest = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M0,13a12.019,12.019,0,0,0,5.112,9.818L5.371,23H18.629l.259-.182A12,12,0,0,0,23.437,9.365C19.029-3.574.253-.657,0,13Zm16.633,5.247c.108-.095.214-.193.317-.3a7.009,7.009,0,0,0,0-9.9c-4.123-4.294-11.784-1.328-11.932,4.6l-1.992.834a8.995,8.995,0,1,1,15.338,5.877c-.134.135-.273.265-.415.389Zm-5.85-3.67L4.551,17.185l-.769-1.847,6.246-2.613a2,2,0,1,1,.755,1.852Z"/></svg>

);
