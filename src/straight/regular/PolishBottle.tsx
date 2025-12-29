import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const PolishBottle = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M19.207,9.968c-.566-.615-1.371-.968-2.207-.968h-2V0h-6V9h-2c-1.71-.034-3.167,1.552-2.989,3.257l1.077,11.743h13.824l1.077-11.751c.069-.833-.216-1.665-.782-2.28ZM11,2h2v7h-2V2Zm6.088,20H6.912l-.908-9.917c-.061-.566,.427-1.097,.996-1.083h10c.565-.016,1.056,.518,.997,1.075l-.909,9.925Zm-9.088-3h8v-6H8v6Zm2-4h4v2h-4v-2Z"/>
</svg>

);
