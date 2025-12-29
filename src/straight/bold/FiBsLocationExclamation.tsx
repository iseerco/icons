import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsLocationExclamation = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m19.071,2.936C17.183,1.047,14.672.007,12,.007s-5.183,1.04-7.071,2.929c-3.899,3.898-3.899,10.243.012,14.153l7.06,6.905,7.071-6.917c3.899-3.898,3.899-10.243,0-14.142Zm-2.109,12.009l-4.962,4.853-4.95-4.841c-2.729-2.729-2.729-7.17,0-9.899,1.322-1.322,3.08-2.05,4.95-2.05s3.628.728,4.95,2.05c2.729,2.729,2.729,7.17.012,9.888Zm-6.462-9.944h3v6h-3v-6Zm0,8h3v3h-3v-3Z"/></svg>

);
