import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrCopy = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m16.5,21c2.481,0,4.5-2.019,4.5-4.5V4.5c0-2.481-2.019-4.5-4.5-4.5H4.5C2.019,0,0,2.019,0,4.5v12c0,2.481,2.019,4.5,4.5,4.5h12ZM1,16.5V4.5c0-1.93,1.57-3.5,3.5-3.5h12c1.93,0,3.5,1.57,3.5,3.5v12c0,1.93-1.57,3.5-3.5,3.5H4.5c-1.93,0-3.5-1.57-3.5-3.5ZM24,4.5v15c0,2.481-2.019,4.5-4.5,4.5H4.5c-.276,0-.5-.224-.5-.5s.224-.5.5-.5h15c1.93,0,3.5-1.57,3.5-3.5V4.5c0-.276.224-.5.5-.5s.5.224.5.5Z"/>
</svg>

);
