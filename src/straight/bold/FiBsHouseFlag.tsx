import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsHouseFlag = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24,10.164v1.938L12.308,3.118c-.182-.142-.434-.142-.615,0L3.192,9.77c-.122.096-.192.239-.192.394v10.824h11v3H0v-13.824c0-1.084.489-2.089,1.344-2.757L9.843.756c1.27-.994,3.043-.994,4.314,0l8.5,6.652h0c.854.668,1.343,1.673,1.343,2.756Zm-3,13.824h3v-7.248l-3,1.516v5.732Zm-5-12.457v12.469h3v-6.974l5-2.526-6-4.362c-.665-.332-2-.134-2,1.393Z"/>
</svg>

);
