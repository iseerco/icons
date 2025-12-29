import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsShoppingBagAdd = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m18,6c0-3.309-2.691-6-6-6s-6,2.691-6,6H0v15.5c0,1.379,1.122,2.5,2.5,2.5h14.5v-1H2.5c-.827,0-1.5-.673-1.5-1.5V7h5v4h1v-4h10v4h1v-4h5v10h1V6h-6Zm-11,0c0-2.757,2.243-5,5-5s5,2.243,5,5H7Zm13,13h4v1h-4v4h-1v-4h-4v-1h4v-4h1v4Z"/>
</svg>

);
