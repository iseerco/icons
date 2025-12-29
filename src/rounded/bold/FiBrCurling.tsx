import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrCurling = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M19.315,9.258l-.247-.986A3,3,0,0,0,16.158,6H7.536l.232-1.042A2.485,2.485,0,0,1,10.209,3H16.5a1.5,1.5,0,0,0,0-3H10.209A5.466,5.466,0,0,0,4.84,4.307L3.651,9.659A6.507,6.507,0,0,0,0,15.5v2A6.508,6.508,0,0,0,6.5,24h11A6.508,6.508,0,0,0,24,17.5v-2A6.512,6.512,0,0,0,19.315,9.258ZM20.964,15H3.036A3.5,3.5,0,0,1,6.5,12h11A3.5,3.5,0,0,1,20.964,15ZM17.5,21H6.5a3.5,3.5,0,0,1-3.464-3H20.964A3.5,3.5,0,0,1,17.5,21Z"/></svg>

);
