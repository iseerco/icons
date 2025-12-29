import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrRectangleHorizontal = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m19.5,21H4.5c-2.481,0-4.5-2.019-4.5-4.5V7.5C0,5.019,2.019,3,4.5,3h15c2.481,0,4.5,2.019,4.5,4.5v9c0,2.481-2.019,4.5-4.5,4.5ZM4.5,4c-1.93,0-3.5,1.57-3.5,3.5v9c0,1.93,1.57,3.5,3.5,3.5h15c1.93,0,3.5-1.57,3.5-3.5V7.5c0-1.93-1.57-3.5-3.5-3.5H4.5Z"/>
</svg>

);
