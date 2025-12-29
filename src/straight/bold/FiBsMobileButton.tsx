import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsMobileButton = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M4,0V20.5c0,1.93,1.57,3.5,3.5,3.5h9c1.93,0,3.5-1.57,3.5-3.5V0H4Zm13,20.5c0,.276-.225,.5-.5,.5H7.5c-.276,0-.5-.224-.5-.5V3h10V20.5Zm-3-1.5h-4v-2h4v2Z"/></svg>

);
