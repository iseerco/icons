import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrTenge = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M2,.5c0-.276,.224-.5,.5-.5H21.5c.276,0,.5,.224,.5,.5s-.224,.5-.5,.5H2.5c-.276,0-.5-.224-.5-.5Zm19.5,3.5H2.5c-.276,0-.5,.224-.5,.5s.224,.5,.5,.5H11.5V23.5c0,.276,.224,.5,.5,.5s.5-.224,.5-.5V5h9c.276,0,.5-.224,.5-.5s-.224-.5-.5-.5Z"/></svg>

);
