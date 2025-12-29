import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsDiceD10 = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M14.4.985a3.49,3.49,0,0,0-4.794,0L.009,13.1l9.6,9.915a3.409,3.409,0,0,0,4.818-.024L23.99,13.1Zm3.843,9.684L14.472,9.261l-1.79-5.635Zm-6.92-7.036L9.533,9.26,5.759,10.667ZM5.149,14.1l3.639-1.357,1.712,1.42v5.463ZM13.5,19.635V14.166l1.713-1.427,3.64,1.358Z"/></svg>

);
