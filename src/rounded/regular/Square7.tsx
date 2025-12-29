import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Square7 = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M19,24H5c-2.757,0-5-2.243-5-5V5C0,2.243,2.243,0,5,0h14c2.757,0,5,2.243,5,5v14c0,2.757-2.243,5-5,5ZM5,2c-1.654,0-3,1.346-3,3v14c0,1.654,1.346,3,3,3h14c1.654,0,3-1.346,3-3V5c0-1.654-1.346-3-3-3H5Zm5.868,15.497l4.921-8.603c.312-.625,.279-1.352-.088-1.946s-1.003-.948-1.701-.948h-5c-.552,0-1,.448-1,1s.448,1,1,1l5.026-.049-4.895,8.552c-.274,.479-.108,1.091,.372,1.365,.157,.09,.327,.132,.496,.132,.347,0,.684-.181,.869-.503Z"/></svg>

);
