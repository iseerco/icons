import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrGrinAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M7,9c.052-3.948,3.948-3.948,4,0C10.948,12.948,7.052,12.948,7,9Zm8,3c2.63-.074,2.63-5.927,0-6C12.37,6.074,12.37,11.927,15,12Zm9,0A12.013,12.013,0,0,1,12,24C-3.9,23.4-3.893.6,12,0A12.013,12.013,0,0,1,24,12Zm-3,0a9.011,9.011,0,0,0-9-9C.077,3.453.08,20.549,12,21A9.011,9.011,0,0,0,21,12Zm-4.211,2.024A15.4,15.4,0,0,1,12,15,15.4,15.4,0,0,1,7.2,14.024a1,1,0,0,0-1.052,1.518A6.836,6.836,0,0,0,12,19a6.827,6.827,0,0,0,5.842-3.458A1,1,0,0,0,16.789,14.024Z"/></svg>

);
