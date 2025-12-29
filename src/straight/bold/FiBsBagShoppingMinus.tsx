import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsBagShoppingMinus = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M18,6c0-3.309-2.691-6-6-6S6,2.691,6,6H0v14.5c0,1.93,1.57,3.5,3.5,3.5H13v-3H3.5c-.276,0-.5-.224-.5-.5V9h3v2h3v-2h6v2h3v-2h3v6h3V6h-6Zm-9,0c0-1.654,1.346-3,3-3s3,1.346,3,3h-6Zm6,12h9v3H15v-3Z"/>
</svg>

);
