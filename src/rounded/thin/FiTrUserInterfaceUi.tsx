import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrUserInterfaceUi = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m19.5,0H4.5C2.019,0,0,2.019,0,4.5v15c0,2.481,2.019,4.5,4.5,4.5h15c2.481,0,4.5-2.019,4.5-4.5V4.5c0-2.481-2.019-4.5-4.5-4.5Zm3.5,19.5c0,1.93-1.57,3.5-3.5,3.5H4.5c-1.93,0-3.5-1.57-3.5-3.5V4.5c0-1.93,1.57-3.5,3.5-3.5h15c1.93,0,3.5,1.57,3.5,3.5v15Zm-5-12v9c0,.276-.224.5-.5.5s-.5-.224-.5-.5V7.5c0-.276.224-.5.5-.5s.5.224.5.5Zm-4,0v5.5c0,2.206-1.794,4-4,4s-4-1.794-4-4v-5.5c0-.276.224-.5.5-.5s.5.224.5.5v5.5c0,1.654,1.346,3,3,3s3-1.346,3-3v-5.5c0-.276.224-.5.5-.5s.5.224.5.5Z"/>
</svg>

);
