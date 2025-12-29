import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsDiscDrive = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m20.5,0H3.5C2.122,0,1,1.122,1,2.5v21.5h22V2.5c0-1.378-1.122-2.5-2.5-2.5Zm1.5,23H2V2.5c0-.827.673-1.5,1.5-1.5h17c.827,0,1.5.673,1.5,1.5v20.5ZM12,4c-4.411,0-8,3.589-8,8s3.589,8,8,8,8-3.589,8-8-3.589-8-8-8Zm0,15c-3.86,0-7-3.14-7-7s3.14-7,7-7,7,3.14,7,7-3.14,7-7,7Zm1-7c0,.552-.448,1-1,1s-1-.448-1-1,.448-1,1-1,1,.448,1,1Z"/>
</svg>

);
