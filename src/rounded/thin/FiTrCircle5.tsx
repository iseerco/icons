import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrCircle5 = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,24C5.383,24,0,18.617,0,12S5.383,0,12,0s12,5.383,12,12-5.383,12-12,12ZM12,1C5.935,1,1,5.935,1,12s4.935,11,11,11,11-4.935,11-11S18.065,1,12,1Zm3.038,15.909c.668-.703,1.008-1.625,.957-2.597-.096-1.826-1.739-3.312-3.665-3.312h-3.33v-3.5c0-.275,.225-.5,.5-.5h5c.276,0,.5-.224,.5-.5s-.224-.5-.5-.5h-5c-.827,0-1.5,.673-1.5,1.5v4c0,.276,.224,.5,.5,.5h3.83c1.402,0,2.599,1.061,2.667,2.365,.036,.694-.207,1.354-.684,1.855-.478,.503-1.121,.779-1.813,.779h-4c-.276,0-.5,.224-.5,.5s.224,.5,.5,.5h4c.969,0,1.871-.388,2.538-1.091Z"/></svg>

);
