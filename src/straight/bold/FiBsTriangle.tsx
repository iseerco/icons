import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsTriangle = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  

<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
<path d="M512,448H0L209.408,86.613c14.954-25.732,47.936-34.47,73.668-19.516c8.089,4.701,14.815,11.427,19.516,19.516L512,448z   M111.253,384h289.493L256,134.187L111.253,384z"/>
</svg>

);
