import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrSquare0 = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,19c-2.757,0-5-2.243-5-5v-4c0-2.757,2.243-5,5-5s5,2.243,5,5v4c0,2.757-2.243,5-5,5Zm0-11c-1.103,0-2,.897-2,2v4c0,1.103,.897,2,2,2s2-.897,2-2v-4c0-1.103-.897-2-2-2Zm6.5,16H5.5c-3.033,0-5.5-2.467-5.5-5.5V5.5C0,2.467,2.467,0,5.5,0h13c3.033,0,5.5,2.467,5.5,5.5v13c0,3.033-2.467,5.5-5.5,5.5ZM5.5,3c-1.378,0-2.5,1.122-2.5,2.5v13c0,1.378,1.122,2.5,2.5,2.5h13c1.378,0,2.5-1.122,2.5-2.5V5.5c0-1.378-1.122-2.5-2.5-2.5H5.5Z"/></svg>

);
