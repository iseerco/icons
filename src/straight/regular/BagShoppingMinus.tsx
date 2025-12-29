import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const BagShoppingMinus = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M18,6c0-3.309-2.691-6-6-6S6,2.691,6,6H0v15c0,1.654,1.346,3,3,3H14v-2H3c-.551,0-1-.449-1-1V8H6v2h2v-2h8v2h2v-2h4v7h2V6h-6Zm-10,0c0-2.206,1.794-4,4-4s4,1.794,4,4H8Zm8,13h8v2h-8v-2Z"/>
</svg>

);
