import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsRadioButton = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M5.5,11C2.467,11,0,8.532,0,5.5S2.467,0,5.5,0s5.5,2.468,5.5,5.5-2.467,5.5-5.5,5.5Zm0,13c-3.033,0-5.5-2.468-5.5-5.5s2.467-5.5,5.5-5.5,5.5,2.468,5.5,5.5-2.467,5.5-5.5,5.5Zm0-8c-1.378,0-2.5,1.121-2.5,2.5s1.122,2.5,2.5,2.5,2.5-1.121,2.5-2.5-1.122-2.5-2.5-2.5ZM24,4H14v3h10v-3Zm0,13H14v3h10v-3Z"/>
</svg>

);
