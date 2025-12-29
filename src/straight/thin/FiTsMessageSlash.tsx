import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsMessageSlash = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m19.707,19h2.293V4.5c0-1.379-1.121-2.5-2.5-2.5H4.5c-.493,0-.972.145-1.379.414L.703-.004-.004.703l23.301,23.301.707-.707-4.297-4.297ZM4.5,3h15c.827,0,1.5.673,1.5,1.5v13.5h-2.293L3.854,3.146c.2-.096.42-.146.646-.146Zm10.543,15.579l.71.71-2.891,2.39c-.241.215-.548.322-.857.322-.313,0-.63-.11-.881-.335l-3.166-2.666H2V5.535l1,1v11.465h5.323l3.455,2.91c.131.118.312.114.434.01l2.832-2.341Z"/></svg>

);
