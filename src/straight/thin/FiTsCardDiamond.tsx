import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsCardDiamond = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m8.5,12l3.5,5,3.5-5-3.5-5-3.5,5Zm3.5,3.256l-2.279-3.256,2.279-3.256,2.279,3.256-2.279,3.256ZM18.5,0H5.5c-1.378,0-2.5,1.122-2.5,2.5v21.5h18V2.5c0-1.378-1.122-2.5-2.5-2.5Zm1.5,23H4V2.5c0-.827.673-1.5,1.5-1.5h13c.827,0,1.5.673,1.5,1.5v20.5Z"/>
</svg>

);
