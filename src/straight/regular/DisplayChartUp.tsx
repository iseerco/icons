import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const DisplayChartUp = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M24,19V3.5c0-1.378-1.122-2.5-2.5-2.5H2.5C1.122,1,0,2.122,0,3.5v15.5H11v2H6v2h12v-2h-5v-2h11ZM2,3.5c0-.276,.224-.5,.5-.5H21.5c.276,0,.5,.224,.5,.5v13.5H2V3.5Zm18,3v4.478h-2v-2.563l-5.154,5.154-3-3-4.274,4.274-1.414-1.414,5.688-5.688,3,3,3.74-3.74h-2.563v-2h4.478c.827,0,1.5,.673,1.5,1.5Z"/>
</svg>

);
