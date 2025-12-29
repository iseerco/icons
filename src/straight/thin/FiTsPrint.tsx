import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsPrint = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M24,8.5c0-1.378-1.121-2.5-2.5-2.5h-2.5V0H5V6H2.5c-1.378,0-2.5,1.122-2.5,2.5v12.5H5v3h14v-3h5V8.5ZM6,1h12V6H6V1Zm12,22H6V15h12v8Zm5-3h-4v-6H5v6H1V8.5c0-.827,.673-1.5,1.5-1.5H21.5c.827,0,1.5,.673,1.5,1.5v11.5ZM15,10h4v1h-4v-1Z"/>
</svg>

);
