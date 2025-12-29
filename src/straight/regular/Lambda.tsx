import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Lambda = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24,22v2h-3.264c-1.144,0-2.172-.636-2.684-1.658l-6.591-13.182-7.709,14.84H1.5L10.353,6.942l-2.195-4.389c-.17-.341-.513-.553-.895-.553h-3.264V0h3.264c1.144,0,2.172.636,2.684,1.658l9.895,19.789c.17.341.513.553.895.553h3.264Z"/>
</svg>

);
