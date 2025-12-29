import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsCardinalCompass = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M17.041,14.8l6.998-2.8-6.999-2.799,2.46-4.701-4.701,2.46L12-.04l-2.799,6.999-4.701-2.46,2.46,4.701L-.039,12l6.998,2.8-2.459,4.7,4.701-2.46,2.799,6.998,2.8-6.997,4.7,2.459-2.459-4.7Zm-5.041,1.162l-1.132-2.83-2.83-1.132,2.83-1.132,1.132-2.829,1.131,2.829,2.83,1.132-2.829,1.131-1.132,2.83Z"/>
</svg>

);
