import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsBagShoppingMinus = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M18,6c0-3.309-2.691-6-6-6S6,2.691,6,6H0v15.5c0,1.378,1.122,2.5,2.5,2.5H14v-1H2.5c-.827,0-1.5-.673-1.5-1.5V7H6v3h1v-3h10v3h1v-3h5v9h1V6h-6Zm-11,0c0-2.757,2.243-5,5-5s5,2.243,5,5H7Zm9,13h8v1h-8v-1Z"/>
</svg>

);
