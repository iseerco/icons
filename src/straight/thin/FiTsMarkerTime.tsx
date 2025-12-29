import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsMarkerTime = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m19.071,2.929c-1.89-1.889-4.4-2.929-7.071-2.929s-5.183,1.04-7.071,2.929c-3.898,3.899-3.898,10.243.004,14.146l7.067,6.912,7.071-6.916c3.898-3.899,3.898-10.243,0-14.142Zm-.703,13.431l-6.368,6.229-6.364-6.225c-3.509-3.509-3.509-9.219,0-12.728,1.7-1.7,3.96-2.636,6.364-2.636s4.664.936,6.364,2.636c3.509,3.509,3.509,9.219.004,12.724ZM12,3.993c-3.309,0-6,2.691-6,6s2.691,6,6,6,6-2.691,6-6-2.691-6-6-6Zm0,11c-2.757,0-5-2.243-5-5s2.243-5,5-5,5,2.243,5,5-2.243,5-5,5Zm.5-5.207l1.536,1.537-.707.707-1.829-1.83v-3.2h1v2.786Z"/>
</svg>

);
