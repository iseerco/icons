import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsDisplayChartUp = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M24,19V3c0-1.103-.897-2-2-2H2C.897,1,0,1.897,0,3V19H11.5v3H6v1h12v-1h-5.5v-3h11.5ZM1,3c0-.551,.449-1,1-1H22c.551,0,1,.449,1,1v15H1V3Zm19,3v5h-1V6.707l-6.154,6.154-3-3-4.627,4.627-.707-.707,5.334-5.334,3,3,5.447-5.447h-4.293v-1h5c.551,0,1,.449,1,1Z"/>
</svg>

);
