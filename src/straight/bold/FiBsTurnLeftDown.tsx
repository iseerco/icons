import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsTurnLeftDown = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m11,3.5v15.847l4.443-4.412,2.114,2.129-6.221,6.177c-.487.487-1.141.759-1.836.759s-1.349-.271-1.84-.763l-6.217-6.173,2.114-2.129,4.443,4.412V3.5c0-1.93,1.57-3.5,3.5-3.5h10.5v3h-10.5c-.276,0-.5.224-.5.5Z"/>
</svg>

);
