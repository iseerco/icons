import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsShoppingBasket = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M20.944,8C20.445,3.506,16.625,0,12,0S3.555,3.506,3.056,8H.084l1.91,13.01c.251,1.705,1.74,2.99,3.463,2.99h13.111c1.725,0,3.213-1.286,3.463-2.991l1.91-13.009h-2.997ZM12,3c2.968,0,5.439,2.166,5.916,5H6.084c.477-2.834,2.948-5,5.916-5Zm7.062,17.574c-.035,.242-.248,.426-.494,.426H5.457c-.246,0-.459-.184-.494-.427l-1.406-9.573H20.469l-1.406,9.574Zm-3.062-1.574h-3v-6h3v6Zm-5,0h-3v-6h3v6Z"/></svg>

);
