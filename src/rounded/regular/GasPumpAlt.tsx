import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const GasPumpAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,6.945a5.963,5.963,0,0,0-1.755-4.117L19.707.293a1,1,0,0,0-1.414,1.414L20,3.414V6a2,2,0,0,0,2,2V18a1,1,0,0,1-2,0V17a3,3,0,0,0-3-3H16V5a5.006,5.006,0,0,0-5-5H5A5.006,5.006,0,0,0,0,5V19a5.006,5.006,0,0,0,5,5h6a5.006,5.006,0,0,0,5-5V16h1a1,1,0,0,1,1,1v1a3,3,0,0,0,6,0S24,6.963,24,6.945ZM5,2h6a3,3,0,0,1,3,3V9H2V5A3,3,0,0,1,5,2Zm9,17a3,3,0,0,1-3,3H5a3,3,0,0,1-3-3V11H14Z"/></svg>

);
