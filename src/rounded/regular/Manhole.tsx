import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Manhole = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm1.99,21.801c-.1-1.009-.954-1.801-1.99-1.801s-1.89.791-1.99,1.801c-4.564-.925-8.01-4.968-8.01-9.801S5.446,3.124,10.01,2.199c.1,1.009.954,1.801,1.99,1.801s1.89-.791,1.99-1.801c4.564.925,8.01,4.968,8.01,9.801s-3.446,8.876-8.01,9.801ZM4,10c0-.553.448-1,1-1h14c.552,0,1,.447,1,1s-.448,1-1,1H5c-.552,0-1-.447-1-1Zm16,4c0,.553-.448,1-1,1H5c-.552,0-1-.447-1-1s.448-1,1-1h14c.552,0,1,.447,1,1ZM7,6c0-.553.448-1,1-1h8c.552,0,1,.447,1,1s-.448,1-1,1h-8c-.552,0-1-.447-1-1Zm10,12c0,.553-.448,1-1,1h-8c-.552,0-1-.447-1-1s.448-1,1-1h8c.552,0,1,.447,1,1Z"/>
</svg>

);
