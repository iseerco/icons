import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsChartLineUpDown = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m2.5,23h21.5v1H2.5c-1.379,0-2.5-1.121-2.5-2.5V0h1v21.5c0,.827.673,1.5,1.5,1.5ZM22.5,2h-5.5v1h5.293l-7.293,7.293-4.462-4.462-7.276,7.277.707.707,6.569-6.57,4.462,4.462L23,3.707v5.293h1V3.5c0-.827-.673-1.5-1.5-1.5Zm.5,16.293l-5.774-5.774-.707.707,5.774,5.774h-5.293v1h5.5c.827,0,1.5-.673,1.5-1.5v-5.5h-1v5.293Z"/>
</svg>

);
