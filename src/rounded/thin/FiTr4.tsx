import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTr4 = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M19.5,0c-.276,0-.5,.224-.5,.5V14H8.5c-1.93,0-3.5-1.57-3.5-3.5V.5c0-.276-.224-.5-.5-.5s-.5,.224-.5,.5V10.5c0,2.481,2.019,4.5,4.5,4.5h10.5v8.5c0,.276,.224,.5,.5,.5s.5-.224,.5-.5V.5c0-.276-.224-.5-.5-.5Z"/></svg>

);
