import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsWaveform = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><polygon points="14.88 23.933 12 12.361 9.12 23.933 5.956 13.169 3.745 20.245 .525 13 0 13 0 10 2.475 10 3.255 11.755 6.044 2.831 8.88 12.478 12 -.061 15.12 12.478 17.956 2.831 20.745 11.755 21.525 10 24 10 24 13 23.475 13 20.255 20.245 18.044 13.169 14.88 23.933"/></svg>

);
