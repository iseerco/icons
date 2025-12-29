import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsCircleA = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm0,21c-4.962,0-9-4.038-9-9S7.038,3,12,3s9,4.038,9,9-4.038,9-9,9Zm0-15.5c-1.358,0-2.327.469-3,2l-3,9.5h3.195l.574-2h4.462l.574,2h3.195l-3-9.5c-.673-1.531-1.642-2-3-2Zm-1.37,6.5l.925-3.223c.085-.173.27-.275.445-.277.175.002.36.104.445.277l.925,3.223h-2.74Z"/></svg>

);
