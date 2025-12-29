import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const TrashPlus = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m22,4h-4.101c-.465-2.279-2.484-4-4.899-4h-2c-2.414,0-4.434,1.721-4.899,4H2c-.553,0-1,.447-1,1s.447,1,1,1h.861l1.296,13.479c.247,2.578,2.387,4.521,4.977,4.521h5.728c2.593,0,4.732-1.947,4.977-4.528l1.277-13.472h.886c.553,0,1-.447,1-1s-.447-1-1-1Zm-11-2h2c1.302,0,2.402.839,2.816,2h-7.631c.414-1.161,1.514-2,2.816-2Zm4.5,12.5h-2.5v2.5c0,.553-.447,1-1,1s-1-.447-1-1v-2.5h-2.5c-.553,0-1-.447-1-1s.447-1,1-1h2.5v-2.5c0-.553.447-1,1-1s1,.447,1,1v2.5h2.5c.553,0,1,.447,1,1s-.447,1-1,1Z"/>
</svg>

);
