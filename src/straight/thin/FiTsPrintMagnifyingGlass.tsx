import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsPrintMagnifyingGlass = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21,16.5c0-2.48-2.02-4.5-4.5-4.5s-4.5,2.02-4.5,4.5,2.02,4.5,4.5,4.5c1.06,0,2.04-.37,2.81-.99l3.79,3.79,.71-.71-3.79-3.79c.62-.77,.99-1.75,.99-2.81Zm-4.5,3.5c-1.93,0-3.5-1.57-3.5-3.5s1.57-3.5,3.5-3.5,3.5,1.57,3.5,3.5-1.57,3.5-3.5,3.5Zm5-14h-2.5V0H5V6H2.5c-1.38,0-2.5,1.12-2.5,2.5v12.5H5v3h11v-1H6V15h4v-1H5v6H1V8.5c0-.83,.67-1.5,1.5-1.5H21.5c.83,0,1.5,.67,1.5,1.5v6.5h1v-6.5c0-1.38-1.12-2.5-2.5-2.5ZM6,1h12V6H6V1Z"/></svg>

);
