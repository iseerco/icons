import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsPlugCircleMinus = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M10.459,15.35c-.292,.831-.459,1.72-.459,2.65v6h-3v-5.519c-3.352-.257-6-3.065-6-6.481v-4H0v-3H4V0h3V5h3V0h3V5h4v3h-1v2.262c-1.112,.287-2.131,.801-3,1.498v-3.76H4v4c0,1.93,1.57,3.5,3.5,3.5h2c.335,0,.652-.062,.959-.15Zm13.541,2.65c0,3.314-2.686,6-6,6s-6-2.686-6-6,2.686-6,6-6,6,2.686,6,6Zm-2-1H14v2h8v-2Z"/>
</svg>

);
