import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrScreen = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M19.5,2H4.5C2.019,2,0,4.019,0,6.5V14.5c0,2.481,2.019,4.5,4.5,4.5h7v2H7.5c-.276,0-.5,.224-.5,.5s.224,.5,.5,.5h9c.276,0,.5-.224,.5-.5s-.224-.5-.5-.5h-4v-2h7c2.481,0,4.5-2.019,4.5-4.5V6.5c0-2.481-2.019-4.5-4.5-4.5Zm3.5,12.5c0,1.93-1.57,3.5-3.5,3.5H4.5c-1.93,0-3.5-1.57-3.5-3.5V6.5c0-1.93,1.57-3.5,3.5-3.5h15c1.93,0,3.5,1.57,3.5,3.5V14.5Z"/>
</svg>

);
