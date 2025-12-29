import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ThunderstormRisk = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m5,24h14l-7-12-7,12Zm8-1h-2v-2h2v2Zm0-3h-2v-4h2v4Zm11-7.5c0,3.343-2.199,6.179-5.225,7.145l-5.706-9.645h-2.002l-6.05,10h-.018c-2.757,0-5-2.468-5-5.5,0-1.722.811-3.334,2.157-4.367-.104-.536-.157-1.083-.157-1.633C2,3.813,5.813,0,10.5,0c3.453,0,6.537,2.079,7.848,5.23,3.308.833,5.652,3.803,5.652,7.27Z"/>
</svg>

);
