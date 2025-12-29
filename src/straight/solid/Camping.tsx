import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Camping = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,16.919,16.184,24H7.816ZM23.592,19.6,12-.013.408,19.6A2.914,2.914,0,0,0,2.917,24H5.492L12,12.987,18.508,24h2.575a2.914,2.914,0,0,0,2.509-4.4Z"/></svg>

);
