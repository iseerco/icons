import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsSwatchbook = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m6,19c0,.552-.448,1-1,1s-1-.448-1-1,.448-1,1-1,1,.448,1,1Zm18-5v10H5c-2.757,0-5-2.243-5-5V0h10v6.929l4.899-4.9,7.071,7.071-4.899,4.899h6.929Zm-14.05,5.708l10.607-10.607-5.657-5.657-4.899,4.9v10.657c0,.24-.017.476-.05.708ZM1,6h8V1H1v5Zm0,6h8v-5H1v5Zm8,7v-6H1v6c0,2.209,1.791,4,4,4s4-1.791,4-4Zm14-4h-6.929l-7.536,7.536c-.169.169-.347.323-.535.464h14.999v-8Z"/></svg>

);
