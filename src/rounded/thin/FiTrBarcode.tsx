import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrBarcode = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M.5,22c-.276,0-.5-.224-.5-.5V2.5c0-.276,.224-.5,.5-.5s.5,.224,.5,.5V21.5c0,.276-.224,.5-.5,.5Zm20.5-.5V2.5c0-.276-.224-.5-.5-.5s-.5,.224-.5,.5V21.5c0,.276,.224,.5,.5,.5s.5-.224,.5-.5Zm-9,0V2.5c0-.276-.224-.5-.5-.5s-.5,.224-.5,.5V21.5c0,.276,.224,.5,.5,.5s.5-.224,.5-.5Zm-6-.5V3c0-.552-.447-1-1-1s-1,.448-1,1V21c0,.552,.447,1,1,1s1-.448,1-1Zm3,0V3c0-.552-.447-1-1-1s-1,.448-1,1V21c0,.552,.447,1,1,1s1-.448,1-1Zm9,0V3c0-.552-.447-1-1-1s-1,.448-1,1V21c0,.552,.447,1,1,1s1-.448,1-1Zm-3,.5V2.5c0-.276-.224-.5-.5-.5s-.5,.224-.5,.5V21.5c0,.276,.224,.5,.5,.5s.5-.224,.5-.5Zm9,0V2.5c0-.276-.224-.5-.5-.5s-.5,.224-.5,.5V21.5c0,.276,.224,.5,.5,.5s.5-.224,.5-.5Z"/></svg>

);
