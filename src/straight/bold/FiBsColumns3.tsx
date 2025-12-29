import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsColumns3 = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m20.5,2H3.5c-1.93,0-3.5,1.57-3.5,3.5v16.5h24V5.5c0-1.93-1.57-3.5-3.5-3.5Zm-6.5,3v14h-4V5h4Zm-11,.5c0-.276.224-.5.5-.5h3.5v14H3V5.5Zm18,13.5h-4V5h3.5c.276,0,.5.224.5.5v13.5Z"/></svg>

);
