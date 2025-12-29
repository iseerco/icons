import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsTicket = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m18.5,0h-4v.5c0,1.378-1.122,2.5-2.5,2.5s-2.5-1.122-2.5-2.5v-.5h-4c-1.378,0-2.5,1.122-2.5,2.5v21.5h6.5v-.5c0-1.378,1.122-2.5,2.5-2.5s2.5,1.122,2.5,2.5v.5h6.5V2.5c0-1.378-1.122-2.5-2.5-2.5Zm1.5,23h-4.536c-.243-1.694-1.704-3-3.464-3s-3.221,1.306-3.464,3h-4.536V2.5c0-.827.673-1.5,1.5-1.5h3.036c.243,1.694,1.704,3,3.464,3s3.221-1.306,3.464-3h3.036c.827,0,1.5.673,1.5,1.5v20.5Zm-15-7h2v1h-2v-1Zm4,0h2v1h-2v-1Zm4,0h2v1h-2v-1Zm4,0h2v1h-2v-1Z"/>
</svg>

);
