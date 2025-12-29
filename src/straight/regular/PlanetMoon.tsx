import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const PlanetMoon = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m10.5,3C4.71,3,0,7.71,0,13.5s4.71,10.5,10.5,10.5,10.5-4.71,10.5-10.5S16.29,3,10.5,3Zm0,19c-4.687,0-8.5-3.813-8.5-8.5,0-1.328.306-2.586.852-3.707l1.148,1.207h3l1,1v2l2,2v3h2l3-5.5-4-2.5h-2.5l-1.5-1.5,1.5-1.5,2,1,1-1-1.5-2.5s.121-.188.321-.498c.059-.001.119-.002.179-.002,4.687,0,8.5,3.813,8.5,8.5s-3.813,8.5-8.5,8.5ZM24,2.5c0,1.381-1.119,2.5-2.5,2.5s-2.5-1.119-2.5-2.5,1.119-2.5,2.5-2.5,2.5,1.119,2.5,2.5Z"/></svg>

);
