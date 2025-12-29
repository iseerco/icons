import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsScaleComparisonAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24,14v.5c0,2.485-2.014,4.5-4.5,4.5s-4.5-2.015-4.5-4.5v-.5h9Zm-15.028-2h.028v-1H0v.5c0,2.485,2.014,4.5,4.5,4.5,2.316,0,4.223-1.75,4.472-4Zm4.528-6.267l6.808,1.539.662-2.926-7.47-1.689V0h-3v1.978L3.617.422l-.662,2.926,7.545,1.706v15.946h-6.5v3h16v-3h-6.5V5.732ZM3.207,10.207l1.293-1.293,1.293,1.293,1.414-1.414-1.293-1.293,1.293-1.293-1.414-1.414-1.293,1.293-1.293-1.293-1.414,1.414,1.293,1.293-1.293,1.293,1.414,1.414Zm14.832-.746l-1.414,1.414,2.625,2.625,4-4-1.414-1.414-2.586,2.586-1.211-1.211Z"/>
</svg>

);
