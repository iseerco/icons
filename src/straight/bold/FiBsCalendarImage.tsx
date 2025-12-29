import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsCalendarImage = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m20.5,2h-2.5V0h-3v2h-6V0h-3v2h-2.5c-1.93,0-3.5,1.57-3.5,3.5v18.5h24V5.5c0-1.93-1.57-3.5-3.5-3.5Zm.5,7v.879l-6,6-3.539-3.538L3,20.802v-11.802h18Zm-13.956,12l4.417-4.417,3.539,3.538,6-6v6.879H7.044Zm-2.044-8.5c0-.828.672-1.5,1.5-1.5s1.5.672,1.5,1.5-.672,1.5-1.5,1.5-1.5-.672-1.5-1.5Z"/></svg>

);
