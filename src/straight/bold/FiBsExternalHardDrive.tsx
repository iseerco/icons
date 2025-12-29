import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsExternalHardDrive = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m23,10V3.5c0-1.93-1.57-3.5-3.5-3.5h-9c-1.93,0-3.5,1.57-3.5,3.5v1.5h-3.5c-1.93,0-3.5,1.57-3.5,3.5v15.5h17v-15.5c0-1.93-1.57-3.5-3.5-3.5h-3.5v-1.5c0-.275.224-.5.5-.5h9c.275,0,.5.225.5.5v6.5h-1v7h5v-7h-1Zm-14.5,12.5c-.83,0-1.5-.67-1.5-1.5s.67-1.5,1.5-1.5,1.5.67,1.5,1.5-.67,1.5-1.5,1.5Zm4,0c-.83,0-1.5-.67-1.5-1.5s.67-1.5,1.5-1.5,1.5.67,1.5,1.5-.67,1.5-1.5,1.5Zm1.5-14v9.5H3v-9.5c0-.275.224-.5.5-.5h10c.275,0,.5.225.5.5Z"/>
</svg>

);
