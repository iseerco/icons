import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsToiletsPortable = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m23.794,2.108c-.117-.085-2.917-2.096-6.044-2.096C15.164.013,12.806,1.385,12,1.909,11.194,1.385,8.836.013,6.25.013,3.123.013.323,2.023.206,2.108l-.206.15v21.742h1v-2h10.5v2h1v-2h10.5v2h1V2.258l-.206-.15Zm-.794.669v2.222h-10.5v-2.221c.666-.435,2.898-1.766,5.25-1.766s4.575,1.326,5.25,1.765ZM6.25,1.013c2.345,0,4.575,1.326,5.25,1.765v2.222H1v-2.222c.675-.439,2.905-1.765,5.25-1.765ZM1,21V6h10.5v6h-2.5v1h2.5v8H1Zm11.5,0V6h10.5v6h-3v1h3v8h-10.5Z"/>
</svg>

);
