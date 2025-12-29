import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const PersonPregnant = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M8.5,2.5c0-1.381,1.119-2.5,2.5-2.5s2.5,1.119,2.5,2.5-1.119,2.5-2.5,2.5-2.5-1.119-2.5-2.5Zm6.325,7.037l-.114-.909c-.187-1.498-1.467-2.628-2.977-2.628h-1.469c-1.51,0-2.79,1.13-2.977,2.628l-.223,1.787,4.882,2.457-.895,1.789-4.25-2.141-.935,7.481h2.133v4h2v-4h2v4h2v-4h2.713l.232-.674c.108-.313,1.055-3.112,1.055-4.826,0-2.146-1.252-4.068-3.175-4.963Z"/></svg>

);
