import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsSquareY = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m20.5,0H3.5C1.57,0,0,1.57,0,3.5v20.5h24V3.5c0-1.93-1.57-3.5-3.5-3.5Zm.5,21H3V3.5c0-.275.224-.5.5-.5h17c.276,0,.5.225.5.5v17.5Zm-2.006-16l-5.494,7.492v6.508h-3v-6.508l-5.494-7.492h3.721l3.273,4.463,3.273-4.463h3.721Z"/></svg>

);
