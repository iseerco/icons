import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrSphere = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm0,15.272C6.59,15.272,3,13.3,3,12s3.59-3.272,9-3.272S21,10.7,21,12,17.41,15.272,12,15.272ZM12,3a9,9,0,0,1,7.5,4.039A20.176,20.176,0,0,0,12,5.728,20.176,20.176,0,0,0,4.5,7.039,9,9,0,0,1,12,3Zm0,18a9,9,0,0,1-7.5-4.039A20.176,20.176,0,0,0,12,18.272a20.176,20.176,0,0,0,7.5-1.311A9,9,0,0,1,12,21Z"/></svg>

);
