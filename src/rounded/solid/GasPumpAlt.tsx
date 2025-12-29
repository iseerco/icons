import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const GasPumpAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,18a3,3,0,0,1-6,0V17a1,1,0,0,0-1-1H16v3a5.006,5.006,0,0,1-5,5H5a5.006,5.006,0,0,1-5-5V11H16v3h1a3,3,0,0,1,3,3v1a1,1,0,0,0,2,0V8a2,2,0,0,1-2-2V3.414L18.293,1.707A1,1,0,0,1,19.707.293l2.536,2.535A5.961,5.961,0,0,1,24,6.977C24,6.985,24,18,24,18ZM16,5a5.006,5.006,0,0,0-5-5H5A5.006,5.006,0,0,0,0,5V9H16Z"/></svg>

);
