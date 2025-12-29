import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsTurntable = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m21.5,2H2.5c-1.378,0-2.5,1.121-2.5,2.5v17.5h24V4.5c0-1.379-1.122-2.5-2.5-2.5Zm1.5,19H1V4.5c0-.827.673-1.5,1.5-1.5h19c.827,0,1.5.673,1.5,1.5v16.5Zm-3-16h1v9.63l-2.563,4.613-.874-.486,2.437-4.387V5Zm-9,7c0,.552-.448,1-1,1s-1-.448-1-1,.448-1,1-1,1,.448,1,1Zm-1-7c-3.86,0-7,3.141-7,7s3.14,7,7,7,7-3.141,7-7-3.14-7-7-7Zm0,13c-3.309,0-6-2.691-6-6s2.691-6,6-6,6,2.691,6,6-2.691,6-6,6Z"/>
</svg>

);
