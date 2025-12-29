import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsShoppingBasket = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M11.5,12h1v8h-1V12Zm5.5,8h1V12h-1v8Zm-11,0h1V12h-1v8ZM23.976,8l-1.844,13.831c-.166,1.236-1.231,2.169-2.479,2.169H4.338c-1.249,0-2.313-.933-2.479-2.17L.016,8H3.059C3.558,3.507,7.375,0,12,0s8.442,3.507,8.941,8h3.035Zm-19.906,0h15.861c-.495-3.94-3.859-7-7.931-7s-7.436,3.06-7.931,7Zm18.764,1H1.158l1.693,12.698c.098,.742,.737,1.302,1.486,1.302h15.314c.749,0,1.389-.56,1.488-1.302l1.692-12.698Z"/></svg>

);
