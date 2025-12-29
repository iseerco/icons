import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsTrainSubwayTunnel = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M16.5,7H7.5c-1.93,0-3.5,1.57-3.5,3.5v10.5h3.506l-1.837,3h1.172l1.837-3h6.643l1.837,3h1.172l-1.837-3h3.506V10.5c0-1.93-1.57-3.5-3.5-3.5Zm-11.5,3.5c0-1.379,1.122-2.5,2.5-2.5h4v6H5v-3.5Zm14,9.5H5v-5h3v1.5c0,.276,.224,.5,.5,.5s.5-.224,.5-.5v-1.5h6v1.5c0,.276,.224,.5,.5,.5s.5-.224,.5-.5v-1.5h3v5Zm0-6h-6.5v-6h4c1.378,0,2.5,1.121,2.5,2.5v3.5Zm5-2v12h-1V12c0-6.065-4.935-11-11-11S1,5.935,1,12v12H0V12C0,5.383,5.383,0,12,0s12,5.383,12,12Z"/></svg>

);
