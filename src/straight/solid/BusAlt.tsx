import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const BusAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,9v3a2,2,0,0,1-2,2H2a2,2,0,0,1-2-2V9H2V6H22V9ZM2,16H22v6H20v2H15V22H9v2H4V22H2Zm15,4a1,1,0,0,0,0-2A1,1,0,0,0,17,20ZM7,20a1,1,0,0,0,0-2A1,1,0,0,0,7,20ZM9,3h6V4h6.983a2.978,2.978,0,0,0-1.8-2.531c-3.673-1.9-12.695-1.893-16.358,0A2.978,2.978,0,0,0,2.017,4H9Z"/></svg>

);
