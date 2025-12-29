import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsSquareT = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m5,5h14v3h-5.5v11h-3v-11h-5.5v-3Zm19-1.5v20.5H0V3.5C0,1.57,1.57,0,3.5,0h17c1.93,0,3.5,1.57,3.5,3.5Zm-3,0c0-.275-.224-.5-.5-.5H3.5c-.276,0-.5.225-.5.5v17.5h18V3.5Z"/></svg>

);
