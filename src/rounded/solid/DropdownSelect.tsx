import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const DropdownSelect = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M19,0H5C2.243,0,0,2.243,0,5v14c0,2.757,2.243,5,5,5h14c2.757,0,5-2.243,5-5V5c0-2.757-2.243-5-5-5Zm-2.43,12.052l-3.509,3.509c-.586,.586-1.536,.586-2.121,0l-3.509-3.509c-.757-.757-.221-2.052,.85-2.052h7.44c1.071,0,1.607,1.294,.85,2.052Z"/>
</svg>

);
