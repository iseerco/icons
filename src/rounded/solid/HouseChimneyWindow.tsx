import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const HouseChimneyWindow = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M14,12v4h-4v-4h4Zm10-2.276v9.276c0,2.757-2.243,5-5,5H5c-2.757,0-5-2.243-5-5V9.724c0-1.665,.824-3.214,2.204-4.145L9.203,.855c1.699-1.146,3.895-1.146,5.594,0l5.203,3.511V2c0-.553,.448-1,1-1s1,.447,1,1v3.735c1.253,.942,2,2.41,2,3.988Zm-8,2.276c0-1.103-.897-2-2-2h-4c-1.103,0-2,.897-2,2v4c0,1.103,.897,2,2,2h4c1.103,0,2-.897,2-2v-4Z"/></svg>

);
