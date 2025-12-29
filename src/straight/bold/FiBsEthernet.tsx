import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsEthernet = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m21,7v-3h-3V1H6v3h-3v3H0v12.5c0,1.93,1.57,3.5,3.5,3.5h17c1.93,0,3.5-1.57,3.5-3.5V7h-3Zm0,12.5c0,.276-.225.5-.5.5h-1.5v-4h-3v4h-2.5v-4h-3v4h-2.5v-4h-3v4h-1.5c-.276,0-.5-.224-.5-.5v-9.5h3v-3h3v-3h6v3h3v3h3v9.5Z"/>
</svg>

);
