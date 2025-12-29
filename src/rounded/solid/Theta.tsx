import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Theta = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m12,0C7.038,0,3,5.383,3,12s4.038,12,9,12,9-5.383,9-12S16.962,0,12,0Zm0,2c3.624,0,6.613,3.954,6.965,9H5.035c.352-5.046,3.341-9,6.965-9Zm0,20c-3.624,0-6.613-3.954-6.965-9h13.93c-.352,5.046-3.341,9-6.965,9Z"/></svg>

);
