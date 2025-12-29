import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsPersonMilitaryPointing = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M19.044,13.176c-.809-1.342-2.285-2.176-3.854-2.176H0v3H7v10h11v-6.748l3.331,5.523,2.568-1.549-4.855-8.05Zm-9.044,.824h2.896l-2.896,3.764v-3.764Zm5,7h-3.705l3.705-4.815v4.815ZM8,5h8c0,2.209-1.791,4-4,4s-4-1.791-4-4Zm-.435-2.9C7.253,1.011,8.109-.06,9.24,.003l6.002,.51c.831,.046,1.388,.873,1.118,1.661l-.319,.826h-7.997l-.479-.9Z"/>
</svg>

);
