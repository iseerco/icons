import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsSquareE = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m8.5,5h9.5v3h-9v2.5h6v3h-6v2.5h9v3h-9.5c-1.379,0-2.5-1.122-2.5-2.5V7.5c0-1.378,1.121-2.5,2.5-2.5Zm15.5-1.5v20.5H0V3.5C0,1.57,1.57,0,3.5,0h17c1.93,0,3.5,1.57,3.5,3.5Zm-3,0c0-.276-.225-.5-.5-.5H3.5c-.275,0-.5.224-.5.5v17.5h18V3.5Z"/></svg>

);
