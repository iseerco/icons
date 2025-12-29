import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Walker = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m22,18.184V5c0-2.757-2.243-5-5-5h-5.198c-2.095,0-3.983,1.322-4.698,3.291L.061,22.658c-.189.52.079,1.093.598,1.281.113.041.229.061.342.061.408,0,.792-.252.939-.658l4.488-12.342h13.572v7.184c-1.161.414-2,1.514-2,2.816,0,1.654,1.346,3,3,3s3-1.346,3-3c0-1.302-.839-2.402-2-2.816ZM7.155,9l1.828-5.025c.43-1.182,1.562-1.975,2.819-1.975h5.198c1.654,0,3,1.346,3,3v4H7.155Z"/></svg>

);
