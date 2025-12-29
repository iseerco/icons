import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsGrate = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m21.5,0H2.5C1.121,0,0,1.121,0,2.5v21.5h24V2.5c0-1.379-1.121-2.5-2.5-2.5Zm1.5,2.5v9h-5V1h3.5c.827,0,1.5.673,1.5,1.5Zm-11.5,10v10.5h-4.5v-10.5h4.5Zm-4.5-1V1h4.5v10.5h-4.5Zm5.5,1h4.5v10.5h-4.5v-10.5Zm0-1V1h4.5v10.5h-4.5ZM2.5,1h3.5v10.5H1V2.5c0-.827.673-1.5,1.5-1.5Zm-1.5,11.5h5v10.5H1v-10.5Zm17,10.5v-10.5h5v10.5h-5Z"/>
</svg>

);
