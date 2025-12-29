import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const StarSharpHalf = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m4.567,23.088l2.829-8.754L.039,8.999h9.242L12.5-.668v18.188l-7.933,5.568Zm1.636-12.089l3.543,2.569-1.438,4.452,2.192-1.54v-5.481h-4.297Z"/>
</svg>

);
