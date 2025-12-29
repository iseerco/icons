import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Z = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21,24H5.912c-1.725,0-3.186-1.06-3.723-2.698-.537-1.64,.016-3.358,1.407-4.379L19.222,5.464c.827-.606,.897-1.505,.688-2.144-.209-.638-.797-1.32-1.822-1.32H3C1.692,1.994,1.693,.005,3,0h15.088c1.725,0,3.186,1.06,3.723,2.698,.537,1.64-.016,3.358-1.407,4.379L4.778,18.536c-.827,.606-.897,1.505-.688,2.144,.209,.638,.797,1.32,1.822,1.32h15.088c1.308,.006,1.307,1.995,0,2Z"/></svg>

);
