import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrMouse = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M15.5,3h-3V.5c0-.276-.224-.5-.5-.5s-.5,.224-.5,.5V3h-3c-2.481,0-4.5,2.019-4.5,4.5v8.5c0,4.411,3.589,8,8,8s8-3.589,8-8V7.5c0-2.481-2.019-4.5-4.5-4.5Zm3.5,13c0,3.859-3.14,7-7,7s-7-3.141-7-7V7.5c0-1.93,1.57-3.5,3.5-3.5h7c1.93,0,3.5,1.57,3.5,3.5v8.5ZM12.5,7.5v3c0,.276-.224,.5-.5,.5s-.5-.224-.5-.5v-3c0-.276,.224-.5,.5-.5s.5,.224,.5,.5Z"/>
</svg>

);
