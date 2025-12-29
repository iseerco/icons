import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsTruckFlatbed = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m22,11h-.782l-1.839-5.607c-.478-1.432-1.812-2.393-3.32-2.393h-5.059v12H0v3h2.052c-.034.161-.052.328-.052.5,0,1.381,1.119,2.5,2.5,2.5s2.5-1.119,2.5-2.5c0-.172-.018-.339-.052-.5h9.104c-.034.161-.052.328-.052.5,0,1.381,1.119,2.5,2.5,2.5s2.5-1.119,2.5-2.5c0-.172-.018-.339-.052-.5h3.052v-5c0-1.105-.895-2-2-2Zm-5.941-5c.216,0,.406.138.475.342l1.552,4.658h-4.085v-5h2.059Z"/>
</svg>

);
