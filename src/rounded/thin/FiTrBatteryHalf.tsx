import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrBatteryHalf = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M17.5,20H4.5c-2.481,0-4.5-2.019-4.5-4.5v-7c0-2.481,2.019-4.5,4.5-4.5h13c2.312,0,4.223,1.753,4.472,4h.528c.827,0,1.5,.673,1.5,1.5v5c0,.827-.673,1.5-1.5,1.5h-.528c-.25,2.247-2.16,4-4.472,4ZM4.5,5c-1.93,0-3.5,1.57-3.5,3.5v7c0,1.93,1.57,3.5,3.5,3.5h13c1.93,0,3.5-1.57,3.5-3.5,0-.276,.224-.5,.5-.5h1c.276,0,.5-.224,.5-.5v-5c0-.276-.224-.5-.5-.5h-1c-.276,0-.5-.224-.5-.5,0-1.93-1.57-3.5-3.5-3.5H4.5Zm6,12H4.5c-.827,0-1.5-.673-1.5-1.5v-7c0-.827,.673-1.5,1.5-1.5h6c.827,0,1.5,.673,1.5,1.5v7c0,.827-.673,1.5-1.5,1.5ZM4.5,8c-.276,0-.5,.224-.5,.5v7c0,.276,.224,.5,.5,.5h6c.276,0,.5-.224,.5-.5v-7c0-.276-.224-.5-.5-.5H4.5Z"/></svg>

);
