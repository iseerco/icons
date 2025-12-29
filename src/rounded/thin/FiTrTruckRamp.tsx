import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrTruckRamp = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M20.5,17c-.17,0-.337,.012-.5,.036V4.5c0-1.93,1.57-3.5,3.5-3.5,.276,0,.5-.224,.5-.5s-.224-.5-.5-.5c-2.481,0-4.5,2.019-4.5,4.5v12.634L.35,23.023c-.264,.083-.409,.364-.326,.627,.067,.213,.264,.35,.477,.35,.05,0,.101-.007,.15-.023l16.883-5.331c-.338,.538-.533,1.174-.533,1.855,0,1.93,1.57,3.5,3.5,3.5s3.5-1.57,3.5-3.5-1.57-3.5-3.5-3.5Zm0,6c-1.379,0-2.5-1.122-2.5-2.5s1.121-2.5,2.5-2.5,2.5,1.122,2.5,2.5-1.121,2.5-2.5,2.5Z"/></svg>

);
