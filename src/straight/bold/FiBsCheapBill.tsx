import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsCheapBill = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m22,14V3.5c0-1.93-1.57-3.5-3.5-3.5H5.5c-1.93,0-3.5,1.57-3.5,3.5v10.5h8.497l-.009,5.298-1.893-1.893-2.121,2.121,3.742,3.742c.489.489,1.131.733,1.772.733.637,0,1.271-.241,1.751-.721l3.801-3.715-2.097-2.146-1.955,1.911.009-5.33h8.503ZM5,3.5c0-.276.224-.5.5-.5h13c.276,0,.5.224.5.5v7.5H5V3.5Zm10,3.5c0,1.657-1.343,3-3,3s-3-1.343-3-3,1.343-3,3-3,3,1.343,3,3Z"/>
</svg>

);
