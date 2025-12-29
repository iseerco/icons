import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Sickle = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m19.819,2.971C17.769.978,15.07-.081,12.199.004h0C6.683.159,2.109,4.774,2.002,10.292c-.059,3.052,1.223,5.956,3.468,7.982l-4.018,4.018c-.391.391-.391,1.023,0,1.414.195.195.451.293.707.293s.512-.098.707-.293l5.303-5.303c.588-.587.756-1.477.418-2.213-.536-1.168-.709-2.468-.501-3.761.468-2.91,2.95-5.186,5.901-5.411,3.269-.247,6.225,1.978,6.876,5.18.095.466.529.801,1.005.801.491,0,.909-.356.987-.84.097-.601.144-1.144.144-1.66,0-2.86-1.13-5.534-3.181-7.529Z"/>
</svg>

);
