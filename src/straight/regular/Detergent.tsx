import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Detergent = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M18.5,5h-4.5V2c0-1.103-.897-2-2-2h-3c-1.103,0-2,.897-2,2v3.295c-2.888,.863-5,3.541-5,6.705v12H22V8.5c0-1.93-1.57-3.5-3.5-3.5ZM9,2h3v3h-3V2Zm0,11v4H4v-4h5Zm11,9H4v-3h7V11H4.101c.465-2.279,2.484-4,4.899-4h6v7.5c0,1.93,1.57,3.5,3.5,3.5h1.5v4Zm0-6h-1.5c-.827,0-1.5-.673-1.5-1.5V7h1.5c.827,0,1.5,.673,1.5,1.5v7.5Z"/>
</svg>

);
