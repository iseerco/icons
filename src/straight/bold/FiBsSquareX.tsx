import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsSquareX = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m20.5,0H3.5C1.57,0,0,1.57,0,3.5v20.5h24V3.5c0-1.93-1.57-3.5-3.5-3.5Zm.5,21H3V3.5c0-.275.225-.5.5-.5h17c.275,0,.5.225.5.5v17.5Zm-2.006-16l-5.133,7,5.133,7h-3.721l-3.273-4.463-3.273,4.463h-3.721l5.133-7-5.133-7h3.721l3.273,4.463,3.273-4.463h3.721Z"/></svg>

);
