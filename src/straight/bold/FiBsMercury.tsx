import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsMercury = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m20,10c0-2.675-1.32-5.048-3.344-6.501,1.219-.877,2.182-2.089,2.755-3.499h-3.437c-.914,1.207-2.348,2-3.974,2s-3.061-.793-3.974-2h-3.437c.573,1.41,1.536,2.621,2.755,3.499-2.023,1.453-3.344,3.826-3.344,6.501,0,3.898,2.803,7.154,6.5,7.858v1.142h-2.5v3h2.5v2h3v-2h2.5v-3h-2.5v-1.142c3.697-.704,6.5-3.96,6.5-7.858Zm-13,0c0-2.757,2.243-5,5-5s5,2.243,5,5-2.243,5-5,5-5-2.243-5-5Z"/>
</svg>

);
