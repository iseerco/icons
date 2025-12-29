import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsRectangleList = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24,24H0V4.5C0,2.57,1.57,1,3.5,1h17c1.93,0,3.5,1.57,3.5,3.5v19.5Zm-21-3h18V4.5c0-.276-.224-.5-.5-.5H3.5c-.276,0-.5.224-.5.5v16.5ZM19,6h-9v3h9v-3Zm-12.5,0c-.828,0-1.5.672-1.5,1.5s.672,1.5,1.5,1.5,1.5-.672,1.5-1.5-.672-1.5-1.5-1.5Zm12.5,5h-9v3h9v-3Zm-12.5,0c-.828,0-1.5.672-1.5,1.5s.672,1.5,1.5,1.5,1.5-.672,1.5-1.5-.672-1.5-1.5-1.5Zm12.5,5h-9v3h9v-3Zm-12.5,0c-.828,0-1.5.672-1.5,1.5s.672,1.5,1.5,1.5,1.5-.672,1.5-1.5-.672-1.5-1.5-1.5Z"/>
</svg>

);
