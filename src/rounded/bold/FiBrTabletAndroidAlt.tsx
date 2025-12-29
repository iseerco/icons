import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrTabletAndroidAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m16.5,0H7.5C4.468,0,2,2.467,2,5.5v13c0,3.033,2.468,5.5,5.5,5.5h9c3.032,0,5.5-2.467,5.5-5.5V5.5c0-3.033-2.468-5.5-5.5-5.5ZM7.5,3h9c1.379,0,2.5,1.122,2.5,2.5v10.5H5V5.5c0-1.378,1.121-2.5,2.5-2.5Zm-2.449,16h4.949v2h-2.5c-1.208,0-2.217-.86-2.449-2Zm11.449,2h-2.5v-2h4.949c-.232,1.14-1.242,2-2.449,2Z"/>
</svg>

);
