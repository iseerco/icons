import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsQrScan = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m0,10h24v3H0v-3Zm3,10.5v-3.5H0v3.5c0,1.93,1.57,3.5,3.5,3.5h3.5v-3h-3.5c-.276,0-.5-.224-.5-.5Zm18,0c0,.276-.224.5-.5.5h-3.5v3h3.5c1.93,0,3.5-1.57,3.5-3.5v-3.5h-3v3.5Zm-.5-20.5h-3.5v3h3.5c.276,0,.5.224.5.5v3.5h3v-3.5c0-1.93-1.57-3.5-3.5-3.5ZM3,3.5c0-.276.224-.5.5-.5h3.5V0h-3.5C1.57,0,0,1.57,0,3.5v3.5h3v-3.5Z"/>
</svg>

);
