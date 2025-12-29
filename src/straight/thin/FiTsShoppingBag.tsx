import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsShoppingBag = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m18,6c0-3.309-2.691-6-6-6s-6,2.691-6,6H0v15.5c0,1.378,1.121,2.5,2.5,2.5h19c1.379,0,2.5-1.122,2.5-2.5V6h-6ZM12,1c2.757,0,5,2.243,5,5H7c0-2.757,2.243-5,5-5Zm11,20.5c0,.827-.673,1.5-1.5,1.5H2.5c-.827,0-1.5-.673-1.5-1.5V7h5v4h1v-4h10v4h1v-4h5v14.5Z"/>
</svg>

);
