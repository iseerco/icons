import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsChartLineUpDown = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m3.5,21h20.5v3H3.5c-1.93,0-3.5-1.57-3.5-3.5V0h3v20.5c0,.275.225.5.5.5ZM22.909,2h-5.909l2.439,2.439-4.939,4.939-4-4-5.561,5.561,2.121,2.121,3.439-3.439,4,4,7.061-7.061,2.439,2.439V3.091c0-.602-.488-1.091-1.091-1.091Zm-3.849,9.939l-2.121,2.121,2.5,2.5-2.439,2.439h5.909c.603,0,1.091-.488,1.091-1.091v-5.909l-2.439,2.439-2.5-2.5Z"/>
</svg>

);
