import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrScreencast = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24,6.5v11c0,2.481-2.019,4.5-4.5,4.5h-5c-.276,0-.5-.224-.5-.5s.224-.5.5-.5h5c1.93,0,3.5-1.57,3.5-3.5V6.5c0-1.93-1.57-3.5-3.5-3.5H4.5c-1.93,0-3.5,1.57-3.5,3.5v1c0,.276-.224.5-.5.5s-.5-.224-.5-.5v-1C0,4.019,2.019,2,4.5,2h15c2.481,0,4.5,2.019,4.5,4.5ZM1,20c-.552,0-1,.448-1,1s.448,1,1,1,1-.448,1-1-.448-1-1-1Zm-.5-5c-.276,0-.5.224-.5.5s.224.5.5.5c3.033,0,5.5,2.467,5.5,5.5,0,.276.224.5.5.5s.5-.224.5-.5c0-3.584-2.916-6.5-6.5-6.5Zm.047-5c-.276,0-.5.224-.5.5s.224.5.5.5c5.764,0,10.453,4.71,10.453,10.5,0,.276.224.5.5.5s.5-.224.5-.5c0-6.341-5.138-11.5-11.453-11.5Z"/>
</svg>

);
