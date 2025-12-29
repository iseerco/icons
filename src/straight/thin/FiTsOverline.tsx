import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsOverline = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,24c-4.411,0-8-3.589-8-8v-5C4,6.589,7.589,3,12,3s8,3.589,8,8v5c0,4.411-3.589,8-8,8Zm0-20c-3.86,0-7,3.141-7,7v5c0,3.859,3.14,7,7,7s7-3.141,7-7v-5c0-3.859-3.141-7-7-7ZM22,0H2V1H22V0Z"/></svg>

);
