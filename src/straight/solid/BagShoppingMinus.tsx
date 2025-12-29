import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const BagShoppingMinus = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M14,19c0-3.314,2.686-6,6-6,1.476,0,2.9,.544,4,1.528V6h-6c0-3.314-2.686-6-6-6S6,2.686,6,6H0v15c0,1.657,1.343,3,3,3h13.683c-1.677-1.111-2.684-2.989-2.683-5ZM12,2c2.209,0,4,1.791,4,4H8c0-2.209,1.791-4,4-4Zm11,16h-6v2h6v-2Z"/>
</svg>

);
