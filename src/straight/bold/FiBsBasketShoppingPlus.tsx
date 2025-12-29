import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsBasketShoppingPlus = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M20.928,8C20.429,3.507,16.611,0,11.987,0S3.546,3.507,3.046,8H.071l1.911,13.008c.25,1.706,1.739,2.992,3.462,2.992h13.111c1.724,0,3.212-1.286,3.462-2.992l1.911-13.008h-3ZM11.987,3c2.967,0,5.431,2.167,5.91,5H6.078c.478-2.833,2.942-5,5.91-5Zm7.063,17.573c-.036,.244-.249,.427-.495,.427H5.444c-.246,0-.458-.184-.495-.427l-1.406-9.573H20.456l-1.406,9.573Zm-8.55-3.073h-2.5v-3h2.5v-2.5h3v2.5h2.5v3h-2.5v2.5h-3v-2.5Z"/>
</svg>

);
