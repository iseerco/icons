import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ClockFourThirty = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm4.33,14.5c-.277,.478-.889,.641-1.366,.366l-1.964-1.134v4.268c0,.552-.448,1-1,1s-1-.448-1-1v-6c0-.357,.19-.688,.5-.866s.69-.179,1,0l3.464,2c.479,.276,.642,.888,.366,1.366Z"/></svg>

);
