import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsCamcorder = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,21.25l-3-2.25v5H0V9.5c0-1.93,1.57-3.5,3.5-3.5H11.564l-2.727-3H0V0H10.163l5.447,5.991-.01,.009h1.899c1.93,0,3.5,1.57,3.5,3.5v1.5l3-2.25v12.5Zm-6-11.75c0-.276-.225-.5-.5-.5H3.5c-.275,0-.5,.224-.5,.5v11.5h15V9.5Zm-2,9.5H5V11h11v8Zm-8-3h5v-2h-5v2Z"/></svg>

);
