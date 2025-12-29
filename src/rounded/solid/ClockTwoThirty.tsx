import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ClockTwoThirty = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm3.964,10.866l-2.964,1.711v5.423c0,.553-.448,1-1,1s-1-.447-1-1v-6c0-.357,.19-.688,.5-.866l3.464-2c.476-.277,1.089-.113,1.366,.366,.276,.479,.112,1.09-.366,1.366Z"/></svg>

);
