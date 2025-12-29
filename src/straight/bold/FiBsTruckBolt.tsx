import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsTruckBolt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m11.713,9.873c.337.526.381,1.179.118,1.746l-2.106,4.515-2.719-1.268,1.321-2.834h-1.506c-.636,0-1.215-.323-1.549-.863-.334-.541-.364-1.203-.08-1.771l2.284-4.568,2.684,1.342-1.431,2.861h1.449c.625,0,1.198.314,1.534.841Zm12.287,10.127h-3.058c.034.162.058.328.058.5,0,1.381-1.119,2.5-2.5,2.5s-2.5-1.119-2.5-2.5c0-.172.024-.338.058-.5H7.942c.034.162.058.328.058.5,0,1.381-1.119,2.5-2.5,2.5s-2.5-1.119-2.5-2.5c0-.172.024-.338.058-.5H0V1h13.5c1.93,0,3.5,1.57,3.5,3.5v.5h1.5c3.032,0,5.5,2.468,5.5,5.5v9.5ZM14,4.5c0-.275-.225-.5-.5-.5H3v13h11V4.5Zm7,6c0-1.379-1.121-2.5-2.5-2.5h-1.5v5h4v-2.5Z"/>
</svg>

);
