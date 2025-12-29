import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ShoppingCartCheck = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><g id="_01_align_center" data-name="01 align center"><path d="M20.164,13H5.419L4.478,5H12V3H4.242L4.2,2.648A3,3,0,0,0,1.222,0H0V2H1.222a1,1,0,0,1,.993.883L3.8,16.351A3,3,0,0,0,6.778,19H20V17H6.778a1,1,0,0,1-.993-.884L5.654,15H21.836l.9-5H20.705Z"/><circle cx="7" cy="22" r="2"/><circle cx="17" cy="22" r="2"/><path d="M17.078,8.542h.033a1.873,1.873,0,0,0,1.335-.553l5.261-5.261L22.293,1.314,17.112,6.5,14.868,4.16,13.427,5.546l2.306,2.4A1.872,1.872,0,0,0,17.078,8.542Z"/></g></svg>

);
