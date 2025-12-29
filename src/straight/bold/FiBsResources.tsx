import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsResources = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,3H12V5.267L10.975,3.491a2.5,2.5,0,0,0-4.33,0L0,15H7.181a6.5,6.5,0,1,0,12.638,0H24ZM5.2,12,8.81,5.741l2.65,4.59A6.5,6.5,0,0,0,8.816,12Zm8.3,8A3.5,3.5,0,1,1,17,16.5,3.5,3.5,0,0,1,13.5,20ZM21,12H18.184A6.486,6.486,0,0,0,15,10.181V6h6Z"/></svg>

);
