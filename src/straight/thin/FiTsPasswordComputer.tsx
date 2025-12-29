import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsPasswordComputer = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24,19V3.5c0-1.378-1.121-2.5-2.5-2.5H2.5C1.121,1,0,2.122,0,3.5v15.5h11.5v3h-5.5v1h12v-1h-5.5v-3h11.5ZM1,3.5c0-.827.673-1.5,1.5-1.5h19c.827,0,1.5.673,1.5,1.5v14.5H1V3.5Zm13.623,4.596l-1.909,1.908,1.909,1.908-.707.707-1.909-1.909-1.909,1.909-.707-.707,1.909-1.908-1.909-1.908.707-.707,1.909,1.909,1.909-1.909.707.707Zm6.991,0l-1.908,1.908,1.908,1.908-.707.707-1.908-1.908-1.908,1.908-.707-.707,1.908-1.908-1.908-1.908.707-.707,1.908,1.908,1.908-1.908.707.707Zm-13.991-.007l-1.908,1.908,1.908,1.908-.707.707-1.908-1.908-1.908,1.908-.707-.707,1.908-1.908-1.908-1.908.707-.707,1.908,1.908,1.908-1.908.707.707Z"/>
</svg>

);
