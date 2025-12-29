import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsMultipleAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m21.5,6h-.5v-.5c0-1.378-1.122-2.5-2.5-2.5h-1.5v-.5c0-1.378-1.122-2.5-2.5-2.5H2.5C1.122,0,0,1.122,0,2.5v14.5h3v4h3v3h18v-15.5c0-1.378-1.122-2.5-2.5-2.5ZM1,16V2.5c0-.827.673-1.5,1.5-1.5h12c.827,0,1.5.673,1.5,1.5v.5H5.5c-1.378,0-2.5,1.122-2.5,2.5v10.5H1Zm5-7.5v11.5h-2V5.5c0-.827.673-1.5,1.5-1.5h13c.827,0,1.5.673,1.5,1.5v.5h-11.5c-1.378,0-2.5,1.122-2.5,2.5Zm17,14.5H7v-14.5c0-.827.673-1.5,1.5-1.5h13c.827,0,1.5.673,1.5,1.5v14.5Z"/>
</svg>

);
