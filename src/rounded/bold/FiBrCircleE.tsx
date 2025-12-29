import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrCircleE = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m10,9.5v1h3c.828,0,1.5.671,1.5,1.5s-.672,1.5-1.5,1.5h-3v1c0,.276.225.5.5.5h4.5c.828,0,1.5.671,1.5,1.5s-.672,1.5-1.5,1.5h-4.5c-1.93,0-3.5-1.57-3.5-3.5v-5c0-1.93,1.57-3.5,3.5-3.5h4.5c.828,0,1.5.671,1.5,1.5s-.672,1.5-1.5,1.5h-4.5c-.275,0-.5.224-.5.5Zm14,2.5c0,6.617-5.383,12-12,12S0,18.617,0,12,5.383,0,12,0s12,5.383,12,12Zm-3,0c0-4.962-4.037-9-9-9S3,7.038,3,12s4.037,9,9,9,9-4.038,9-9Z"/></svg>

);
