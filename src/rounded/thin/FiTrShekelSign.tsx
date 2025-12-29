import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrShekelSign = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M2.5,24c-.276,0-.5-.224-.5-.5V2.5C2,1.121,3.121,0,4.5,0h4c4.136,0,7.5,3.364,7.5,7.5v10c0,.276-.224,.5-.5,.5s-.5-.224-.5-.5V7.5c0-3.584-2.916-6.5-6.5-6.5H4.5c-.827,0-1.5,.673-1.5,1.5V23.5c0,.276-.224,.5-.5,.5Zm19.5-7.5V.5c0-.276-.224-.5-.5-.5s-.5,.224-.5,.5V16.5c0,3.584-2.916,6.5-6.5,6.5h-4c-.827,0-1.5-.673-1.5-1.5V6.5c0-.276-.224-.5-.5-.5s-.5,.224-.5,.5v15c0,1.379,1.121,2.5,2.5,2.5h4c4.136,0,7.5-3.364,7.5-7.5Z"/></svg>

);
