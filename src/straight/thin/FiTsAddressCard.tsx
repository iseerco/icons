import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsAddressCard = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m24,2.5v19c0,1.378-1.122,2.5-2.5,2.5h-5.5v-1h5.5c.827,0,1.5-.673,1.5-1.5V2.5c0-.827-.673-1.5-1.5-1.5h-5.5V0h5.5c1.378,0,2.5,1.122,2.5,2.5Zm-15,18.646v-5.146H0v-8h9V2.855l8.445,7.821c.363.361.556.826.555,1.32,0,.494-.193.958-.543,1.306l-8.457,7.843Zm1-6.146v3.854l6.764-6.273c.147-.147.236-.359.236-.585s-.088-.439-.248-.599l-6.752-6.253v3.855H1v6h9Z"/></svg>

);
