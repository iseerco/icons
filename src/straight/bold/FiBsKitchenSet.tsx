import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsKitchenSet = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M24,13h-4v-2h-5v2h-4v3h1v5c0,1.654,1.346,3,3,3h5c1.654,0,3-1.346,3-3v-5h1v-3Zm-4,8h-5v-5h5v5ZM0,21H10c0,1.657-1.343,3-3,3H3c-1.657,0-3-1.343-3-3Zm0-4H10c0,1.657-1.343,3-3,3H3c-1.657,0-3-1.343-3-3Zm6.5-4c3.067,0,5.638-2.138,6.318-5h8.182v-3H12.818C12.138,2.138,9.567,0,6.5,0,2.916,0,0,2.916,0,6.5s2.916,6.5,6.5,6.5Zm0-10c1.93,0,3.5,1.57,3.5,3.5s-1.57,3.5-3.5,3.5-3.5-1.57-3.5-3.5,1.57-3.5,3.5-3.5Z"/>
</svg>

);
