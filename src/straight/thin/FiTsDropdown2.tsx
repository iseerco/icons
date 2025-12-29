import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsDropdown2 = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M24,20H0V6.5c0-1.379,1.122-2.5,2.5-2.5H21.5c1.378,0,2.5,1.121,2.5,2.5v13.5ZM1,19H23V6.5c0-.827-.673-1.5-1.5-1.5H2.5c-.827,0-1.5,.673-1.5,1.5v12.5Zm15.5-4.026c-.439,0-.852-.171-1.163-.481l-4.059-3.992h10.442l-4.06,3.994c-.311,.31-.723,.479-1.161,.479Zm-2.779-3.474l2.32,2.282c.25,.249,.67,.246,.915,.003l.003-.003,2.32-2.282h-5.558Z"/>
</svg>

);
