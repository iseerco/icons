import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const TrafficCone = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24,23c0,.553-.447,1-1,1H1c-.553,0-1-.447-1-1s.447-1,1-1h.873l1.469-4h17.316l1.469,4h.873c.553,0,1,.447,1,1Zm-5.913-12H5.913l-1.837,5h15.847l-1.837-5Zm-.735-2l-2.579-7.021C14.341.805,13.252.045,12,.045s-2.341.76-2.773,1.936l-2.579,7.02h10.704Z"/>
</svg>

);
