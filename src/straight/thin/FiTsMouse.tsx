import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsMouse = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M11.5,7h1v4h-1V7Zm8.5-1.5v10.5c0,4.411-3.589,8-8,8s-8-3.589-8-8V5.5c0-1.379,1.122-2.5,2.5-2.5h5V0h1V3h5c1.378,0,2.5,1.121,2.5,2.5Zm-1,0c0-.827-.673-1.5-1.5-1.5H6.5c-.827,0-1.5,.673-1.5,1.5v10.5c0,3.859,3.14,7,7,7s7-3.141,7-7V5.5Z"/>
</svg>

);
