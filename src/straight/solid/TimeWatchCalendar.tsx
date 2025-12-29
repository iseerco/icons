import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const TimeWatchCalendar = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m12,10v-5h-2v5.412l-4.009,2.11.971,1.748,5.038-2.681v.948c-1.194.693-2,1.986-2,3.463v5.951c-.832-.075-1.651-.24-2.443-.501C3.037,19.961,0,15.762,0,11,0,4.935,4.935,0,11,0c5.022,0,9.402,3.392,10.653,8.248,0,0,0,0,0,.002.147.572.23,1.159.284,1.75h-9.937Zm12,7v-1c0-1.103-.897-2-2-2v-2h-2v2h-4v-2h-2v2c-1.103,0-2,.897-2,2v1h12Zm-12,2v5h12v-5h-12Z"/>
</svg>

);
