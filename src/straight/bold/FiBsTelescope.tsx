import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsTelescope = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m21.247,11.251l2.765-1.166L19.794.085l-2.765,1.166.557,1.32L2.763,8.897l.969,2.298L.046,12.749l1.165,2.764,3.686-1.554.974,2.31,5.065-2.161-4.344,9.893h3.277l3.631-8.269,3.631,8.269h3.277l-5.154-11.736,5.44-2.322.552,1.308Zm-13.782,1.076l-.777-1.844,12.064-5.148.777,1.843-12.064,5.149Z"/></svg>

);
