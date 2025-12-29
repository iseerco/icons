import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsTrainTrack = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24,21l-.294-3h-2.336l-.196-2h2.336l-.294-3h-2.336l-.196-2h2.336l-.294-3h-2.336l-.196-2h2.336l-.294-3h-2.336l-.294-3h-3.014l.294,3H7.115l.294-3h-3.014l-.294,3H1.765l-.294,3h2.336l-.196,2H1.274l-.294,3h2.336l-.196,2H.784l-.294,3h2.336l-.196,2H.294l-.294,3h2.336l-.294,3h3.014l.294-3h13.3l.294,3h3.014l-.294-3h2.336ZM6.821,6h10.359l.196,2H6.625l.196-2Zm-.49,5h11.339l.196,2H6.134l.196-2Zm-.686,7l.196-2h12.319l.196,2H5.644Z"/>
</svg>

);
