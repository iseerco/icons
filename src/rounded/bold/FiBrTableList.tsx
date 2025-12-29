import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrTableList = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m18.5,1H5.5C2.468,1,0,3.467,0,6.5v10c0,3.033,2.468,5.5,5.5,5.5h13c3.032,0,5.5-2.467,5.5-5.5V6.5c0-3.033-2.468-5.5-5.5-5.5ZM3,10h3v3h-3v-3Zm6,0h12v3h-12v-3Zm12-3.5v.5h-12v-3h9.5c1.379,0,2.5,1.122,2.5,2.5Zm-15.5-2.5h.5v3h-3v-.5c0-1.378,1.121-2.5,2.5-2.5Zm-2.5,12.5v-.5h3v3h-.5c-1.379,0-2.5-1.122-2.5-2.5Zm15.5,2.5h-9.5v-3h12v.5c0,1.378-1.121,2.5-2.5,2.5Z"/>
</svg>

);
