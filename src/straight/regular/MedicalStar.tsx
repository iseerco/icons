import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const MedicalStar = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m13.874,12l8.841,5.414-1.045,1.705-8.711-5.334v10.215h-2v-10.215l-8.711,5.334-1.045-1.705,8.841-5.414L1.203,6.586l1.045-1.705,8.711,5.334V0h2v10.215l8.711-5.334,1.045,1.705-8.841,5.414Z"/></svg>

);
