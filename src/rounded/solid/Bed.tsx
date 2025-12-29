import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Bed = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M9,9.5A2.5,2.5,0,1,1,6.5,7,2.5,2.5,0,0,1,9,9.5ZM24,12V10a4,4,0,0,0-4-4H15a4,4,0,0,0-4,4v2ZM2,14V3A1,1,0,0,0,0,3V21a1,1,0,0,0,2,0V19H22v2a1,1,0,0,0,2,0V14Z"/></svg>

);
