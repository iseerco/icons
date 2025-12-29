import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrRadioButton = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M4.5,11C2.019,11,0,8.981,0,6.5S2.019,2,4.5,2s4.5,2.019,4.5,4.5-2.019,4.5-4.5,4.5Zm0-8c-1.93,0-3.5,1.57-3.5,3.5s1.57,3.5,3.5,3.5,3.5-1.57,3.5-3.5-1.57-3.5-3.5-3.5Zm0,19c-2.481,0-4.5-2.019-4.5-4.5s2.019-4.5,4.5-4.5,4.5,2.019,4.5,4.5-2.019,4.5-4.5,4.5Zm0-8c-1.93,0-3.5,1.57-3.5,3.5s1.57,3.5,3.5,3.5,3.5-1.57,3.5-3.5-1.57-3.5-3.5-3.5ZM24,6.5c0-.276-.224-.5-.5-.5H12.5c-.276,0-.5,.224-.5,.5s.224,.5,.5,.5h11c.276,0,.5-.224,.5-.5Zm0,11c0-.276-.224-.5-.5-.5H12.5c-.276,0-.5,.224-.5,.5s.224,.5,.5,.5h11c.276,0,.5-.224,.5-.5ZM4.5,7.5c.552,0,1-.448,1-1s-.448-1-1-1-1,.448-1,1,.448,1,1,1Z"/>
</svg>

);
