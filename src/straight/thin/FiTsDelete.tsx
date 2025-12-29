import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsDelete = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m21.5,2h-13.295L.047,12l8.158,10h13.295c1.379,0,2.5-1.122,2.5-2.5V4.5c0-1.378-1.121-2.5-2.5-2.5Zm1.5,17.5c0,.827-.673,1.5-1.5,1.5h-12.82L1.338,12,8.68,3h12.82c.827,0,1.5.673,1.5,1.5v15Zm-5.041-10.752l-3.252,3.252,3.252,3.252-.707.707-3.252-3.252-3.252,3.252-.707-.707,3.252-3.252-3.252-3.252.707-.707,3.252,3.252,3.252-3.252.707.707Z"/>
</svg>

);
