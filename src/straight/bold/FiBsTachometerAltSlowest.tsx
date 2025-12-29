import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsTachometerAltSlowest = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M14,13a2,2,0,0,1-2,2,2.021,2.021,0,0,1-.422-.045l-4.49,2.371-1.4-2.652,4.426-2.338A2,2,0,0,1,14,13Zm2.949-4.949A7,7,0,0,0,5,12.773l3.611-1.907a4.085,4.085,0,0,1,.557-.694,4,4,0,1,1,5.127,6.1l1.728,2.452a7.064,7.064,0,0,0,.924-.779,7,7,0,0,0,0-9.9ZM24,13a12.037,12.037,0,0,1-4.967,9.714L18.64,23H5.36l-.393-.286A12,12,0,1,1,24,13Zm-3,0A9,9,0,1,0,6.354,20H17.646A9.032,9.032,0,0,0,21,13Z"/></svg>

);
