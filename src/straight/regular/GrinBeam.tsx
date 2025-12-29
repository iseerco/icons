import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const GrinBeam = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm0,22A10,10,0,1,1,22,12,10.011,10.011,0,0,1,12,22ZM7,11H5C5,9.108,6.232,7,8,7s3,2.108,3,4H9c0-1.054-.679-2-1-2S7,9.946,7,11Zm12,0H17c0-1.054-.679-2-1-2s-1,.946-1,2H13c0-1.892,1.232-4,3-4S19,9.108,19,11Zm-7,4a21.923,21.923,0,0,0,6.007-1c-.615,2.28-2.664,5-6,5S6.615,16.28,6,14A21.841,21.841,0,0,0,12,15Z"/></svg>

);
