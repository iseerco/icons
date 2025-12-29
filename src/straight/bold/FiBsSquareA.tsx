import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsSquareA = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m20.5,0H3.5C1.57,0,0,1.57,0,3.5v20.5h24V3.5c0-1.93-1.57-3.5-3.5-3.5Zm.5,21H3V3.5c0-.276.224-.5.5-.5h17c.276,0,.5.224.5.5v17.5ZM12,5c-1.358,0-2.327.469-3,2l-4,12h3.244l.926-3h5.659l.926,3h3.244l-4-12c-.673-1.531-1.642-2-3-2Zm-1.903,8l1.458-4.723c.085-.173.27-.275.445-.277.175.002.36.104.445.277l1.458,4.723h-3.807Z"/></svg>

);
