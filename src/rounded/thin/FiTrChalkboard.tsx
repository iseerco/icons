import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrChalkboard = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m23.5,20h-.5V7.5c0-2.481-2.019-4.5-4.5-4.5H5.5C3.019,3,1,5.019,1,7.5v12.5h-.5c-.276,0-.5.224-.5.5s.224.5.5.5h23c.276,0,.5-.224.5-.5s-.224-.5-.5-.5ZM2,7.5c0-1.93,1.57-3.5,3.5-3.5h13c1.93,0,3.5,1.57,3.5,3.5v12.5h-3v-.5c0-.827-.673-1.5-1.5-1.5h-2c-.827,0-1.5.673-1.5,1.5v.5H2V7.5Zm16,12.5h-3v-.5c0-.275.224-.5.5-.5h2c.276,0,.5.225.5.5v.5Z"/>
</svg>

);
