import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrArrowUpLeft = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M23.854,23.146L2.122,1.415c.395-.262,.869-.415,1.378-.415H13.5c.276,0,.5-.224,.5-.5s-.224-.5-.5-.5H3.5C1.57,0,0,1.57,0,3.5V13.5c0,.276,.224,.5,.5,.5s.5-.224,.5-.5V3.5c0-.509,.153-.982,.415-1.378L23.146,23.854c.098,.098,.226,.146,.354,.146s.256-.049,.354-.146c.195-.195,.195-.512,0-.707Z"/></svg>

);
