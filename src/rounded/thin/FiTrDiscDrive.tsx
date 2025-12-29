import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrDiscDrive = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m18.5,0H5.5C3.019,0,1,2.019,1,4.5v15c0,2.481,2.019,4.5,4.5,4.5h13c2.481,0,4.5-2.019,4.5-4.5V4.5c0-2.481-2.019-4.5-4.5-4.5Zm3.5,19.5c0,1.93-1.57,3.5-3.5,3.5H5.5c-1.93,0-3.5-1.57-3.5-3.5V4.5c0-1.93,1.57-3.5,3.5-3.5h13c1.93,0,3.5,1.57,3.5,3.5v15ZM12,4c-4.411,0-8,3.589-8,8s3.589,8,8,8,8-3.589,8-8-3.589-8-8-8Zm0,15c-3.86,0-7-3.14-7-7s3.14-7,7-7,7,3.14,7,7-3.14,7-7,7Zm1-7c0,.552-.448,1-1,1s-1-.448-1-1,.448-1,1-1,1,.448,1,1Z"/>
</svg>

);
