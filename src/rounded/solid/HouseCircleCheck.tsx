import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const HouseCircleCheck = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m18,12c-3.314,0-6,2.686-6,6s2.686,6,6,6,6-2.686,6-6-2.686-6-6-6Zm3.683,5.712l-2.703,2.614c-.452.446-1.052.671-1.653.671s-1.203-.225-1.663-.674l-1.354-1.332c-.395-.387-.4-1.02-.014-1.414.386-.395,1.019-.401,1.414-.014l1.354,1.331c.144.142.38.139.522-.002l2.713-2.624c.397-.381,1.031-.37,1.414.029.382.398.369,1.031-.029,1.414Zm-8.952,6.292h-7.731c-2.757,0-5-2.243-5-5v-9.276c0-1.665.824-3.214,2.203-4.145L9.203.859c1.699-1.146,3.895-1.146,5.594,0l7.203,4.88c1.252.942,2,2.41,2,3.989v2.998c-1.467-1.667-3.61-2.726-6-2.726-4.411,0-8,3.589-8,8,0,2.392,1.061,4.537,2.731,6.004Z"/>
</svg>

);
