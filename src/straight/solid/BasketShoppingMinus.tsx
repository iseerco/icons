import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const BasketShoppingMinus = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M20.941,8C20.441,3.507,16.624,0,12,0S3.559,3.507,3.059,8H-.02l1.917,13.424c.21,1.468,1.487,2.576,2.97,2.576h14.266c1.483,0,2.76-1.107,2.97-2.576l1.917-13.424h-3.079Zm-4.941,9H8v-2h8v2ZM5.08,8c.488-3.387,3.401-6,6.92-6s6.432,2.613,6.92,6H5.08Z"/>
</svg>

);
