import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const TrashCanPlus = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m21,4h-3.101c-.465-2.279-2.484-4-4.899-4h-2c-2.414,0-4.434,1.721-4.899,4h-3.101c-.552,0-1,.447-1,1s.448,1,1,1h1v13c0,2.757,2.243,5,5,5h6c2.757,0,5-2.243,5-5V6h1c.552,0,1-.447,1-1s-.448-1-1-1Zm-10-2h2c1.302,0,2.402.839,2.816,2h-7.631c.414-1.161,1.514-2,2.816-2Zm4,13h-2v2c0,.553-.448,1-1,1s-1-.447-1-1v-2h-2c-.552,0-1-.447-1-1s.448-1,1-1h2v-2c0-.553.448-1,1-1s1,.447,1,1v2h2c.552,0,1,.447,1,1s-.448,1-1,1Z"/>
</svg>

);
