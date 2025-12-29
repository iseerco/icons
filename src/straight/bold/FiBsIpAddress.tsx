import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsIpAddress = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m19.071,2.936h0C17.182,1.046,14.671.006,12,.006s-5.182,1.04-7.071,2.929c-3.899,3.899-3.899,10.243.012,14.153l7.06,6.905,7.071-6.917c3.899-3.899,3.899-10.243,0-14.142Zm-2.109,12.009l-4.962,4.853-4.95-4.841c-2.729-2.729-2.729-7.17,0-9.899,1.322-1.323,3.081-2.051,4.95-2.051s3.628.728,4.95,2.05c2.729,2.729,2.729,7.17.012,9.888ZM8.9,6h1.6v8h-1.6V6Zm5.6,0h-2.5v8h1.6v-3h.9c1.381,0,2.5-1.119,2.5-2.5s-1.119-2.5-2.5-2.5Zm0,3.4h-.9v-1.801h.9c.497,0,.9.403.9.9s-.403.9-.9.9Z"/>
</svg>

);
