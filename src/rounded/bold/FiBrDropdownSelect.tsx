import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrDropdownSelect = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M18.5,0H5.5C2.468,0,0,2.467,0,5.5v13c0,3.033,2.468,5.5,5.5,5.5h13c3.032,0,5.5-2.467,5.5-5.5V5.5c0-3.033-2.468-5.5-5.5-5.5Zm2.5,18.5c0,1.378-1.121,2.5-2.5,2.5H5.5c-1.379,0-2.5-1.122-2.5-2.5V5.5c0-1.378,1.121-2.5,2.5-2.5h13c1.379,0,2.5,1.122,2.5,2.5v13Zm-4.859-6.641l-3.18,3.18c-.531,.531-1.391,.531-1.922,0l-3.18-3.18c-.686-.686-.2-1.859,.77-1.859h6.742c.97,0,1.456,1.173,.77,1.859Z"/>
</svg>

);
