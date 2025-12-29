import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsBottleDroplet = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m18.842,10.234l-3.842-3.457V1h1V0h-8v1h1v5.632l-3.842,3.457c-.736.663-1.158,1.611-1.158,2.602v11.31h16v-11.164c0-.99-.422-1.938-1.158-2.602Zm.158,12.766H5v-10.31c0-.707.302-1.385.827-1.858l4.173-3.755V1h4v6.223l4.173,3.756c.525.473.827,1.149.827,1.857v10.164Zm-6.659-10.865l-.341-.318-.341.318c-.272.254-2.659,2.534-2.659,4.365,0,1.654,1.346,3,3,3s3-1.346,3-3c0-1.831-2.387-4.111-2.659-4.365Zm-.341,6.365c-1.103,0-2-.897-2-2,0-1.014,1.234-2.505,2-3.297.766.792,2,2.283,2,3.297,0,1.103-.897,2-2,2Z"/>
</svg>

);
