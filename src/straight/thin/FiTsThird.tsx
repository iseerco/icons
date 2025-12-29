import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsThird = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m12,15v-1h-3v-4h3v-1h-3v-3h-1v3h-4v-3h-1v3H0v1h3v4H0v1h3v3h1v-3h4v3h1v-3h3Zm-8-1v-4h4v4h-4Zm20,2.5c0,3.032-2.467,5.5-5.5,5.5h-6.5v-1h6.5c2.481,0,4.5-2.019,4.5-4.5s-2.019-4.5-4.5-4.5h-4.5v-1h4c2.206,0,4-1.794,4-4s-1.794-4-4-4h-6v-1h6c2.757,0,5,2.243,5,5,0,1.867-1.029,3.499-2.55,4.357,2.073.789,3.55,2.797,3.55,5.143Z"/>
</svg>

);
