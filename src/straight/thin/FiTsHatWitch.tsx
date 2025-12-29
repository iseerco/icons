import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsHatWitch = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m22.358,23l-5.519-16.184.962-1.816h6.199v-.821L18.977,0h-6.176c-2.003,0-3.783,1.273-4.431,3.17L1.641,23H0v1h24v-1h-1.642Zm-12.358,0v-3h4v3h-4Zm-1-4v4H2.698L9.316,3.492c.509-1.491,1.909-2.492,3.484-2.492h5.814l3.599,3h-5.014l-1.447,2.73,5.549,16.27h-6.301v-4h-6Z"/></svg>

);
