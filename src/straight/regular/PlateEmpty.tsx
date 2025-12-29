import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const PlateEmpty = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M23.294,6.07c-.575-.68-1.415-1.07-2.304-1.07H3.009c-.889,0-1.729,.39-2.304,1.07C.138,6.742-.104,7.623,.042,8.485c.778,4.602,3.867,8.689,7.733,10.515h8.449c3.867-1.825,6.955-5.913,7.733-10.515,.146-.863-.096-1.743-.664-2.415Zm-1.308,2.081c-.647,3.827-3.077,7.274-6.216,8.849h-7.54c-3.14-1.574-5.569-5.022-6.216-8.849-.065-.384,.11-.66,.22-.791,.194-.229,.477-.361,.776-.361H20.991c.299,0,.582,.131,.776,.361,.11,.13,.285,.406,.22,.791Z"/>
</svg>

);
