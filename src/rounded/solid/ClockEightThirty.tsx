import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ClockEightThirty = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm1,18c0,.552-.448,1-1,1s-1-.448-1-1v-4.268l-1.964,1.134c-.479,.276-1.09,.111-1.366-.366-.276-.478-.112-1.09,.366-1.366l3.464-2c.31-.179,.69-.179,1,0s.5,.509,.5,.866v6Z"/></svg>

);
