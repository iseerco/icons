import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrPlate = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,24C5.383,24,0,18.617,0,12S5.383,0,12,0s12,5.383,12,12-5.383,12-12,12ZM12,1C5.935,1,1,5.935,1,12s4.935,11,11,11,11-4.935,11-11S18.065,1,12,1Zm8,11c0-.276-.224-.5-.5-.5s-.5,.224-.5,.5c0,3.859-3.14,7-7,7s-7-3.141-7-7,3.14-7,7-7c.276,0,.5-.224,.5-.5s-.224-.5-.5-.5c-4.411,0-8,3.589-8,8s3.589,8,8,8,8-3.589,8-8Z"/></svg>

);
