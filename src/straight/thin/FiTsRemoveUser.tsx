import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsRemoveUser = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24,12h-8v-1h8v1Zm-9-6C15,2.678,12.297-.025,8.974-.025S2.949,2.678,2.949,6s2.703,6.025,6.025,6.025,6.026-2.703,6.026-6.025Zm-1,0c0,2.771-2.254,5.025-5.026,5.025s-5.025-2.254-5.025-5.025S6.203.975,8.974.975s5.026,2.254,5.026,5.025Zm4,12.5c0-2.481-2.019-4.5-4.5-4.5H4.5c-2.481,0-4.5,2.019-4.5,4.5v5.5h1v-5.5c0-1.93,1.57-3.5,3.5-3.5h9c1.93,0,3.5,1.57,3.5,3.5v5.5h1v-5.5Z"/>
</svg>

);
