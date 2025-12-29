import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrTableRows = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M19.5,2H4.5C2.019,2,0,4.019,0,6.5v11c0,2.481,2.019,4.5,4.5,4.5h15c2.481,0,4.5-2.019,4.5-4.5V6.5c0-2.481-2.019-4.5-4.5-4.5Zm3.5,4.5v4.5H6V3h13.5c1.93,0,3.5,1.57,3.5,3.5ZM1,17.5V6.5c0-1.93,1.57-3.5,3.5-3.5h.5V21h-.5c-1.93,0-3.5-1.57-3.5-3.5Zm18.5,3.5H6V12H23v5.5c0,1.93-1.57,3.5-3.5,3.5Z"/></svg>

);
