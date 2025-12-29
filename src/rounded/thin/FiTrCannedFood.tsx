import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrCannedFood = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M23.5,23h-.5V7h.5c.276,0,.5-.224,.5-.5s-.224-.5-.5-.5h-5.553c.65-.636,1.053-1.522,1.053-2.5,0-1.93-1.57-3.5-3.5-3.5-.276,0-.5,.224-.5,.5s.224,.5,.5,.5c1.378,0,2.5,1.121,2.5,2.5s-1.122,2.5-2.5,2.5H.5c-.276,0-.5,.224-.5,.5s.224,.5,.5,.5h.5V23H.5c-.276,0-.5,.224-.5,.5s.224,.5,.5,.5H23.5c.276,0,.5-.224,.5-.5s-.224-.5-.5-.5ZM2,20H19.5c.276,0,.5-.224,.5-.5s-.224-.5-.5-.5H2V11H19.5c.276,0,.5-.224,.5-.5s-.224-.5-.5-.5H2v-3H22V23H2v-3Z"/></svg>

);
