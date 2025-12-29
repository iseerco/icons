import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Gavel = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M14.291,15.976l-2.426-2.426L1.437,23.978,.022,22.563,10.45,12.136l-2.413-2.413L13.907,3.852l6.254,6.254c-1.541,1.541-3.989,3.99-5.87,5.87Zm8.279-5.45l-7.89,7.889,1.414,1.414,7.89-7.889-1.414-1.414ZM13.487,1.444L12.073,.03,4.184,7.919l1.414,1.414L13.487,1.444Z"/></svg>

);
