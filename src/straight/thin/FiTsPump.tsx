import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsPump = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m14.5,7c-.98,0-1.864.407-2.5,1.058V1h2V0H4v1h2v12H1v-2H0v10h1v-2h10v1.5c0,1.93,1.57,3.5,3.5,3.5h9.5V7h-9.5ZM1,18v-4h5v4H1Zm6,0V1h4v17h-4Zm7.5,5c-1.378,0-2.5-1.121-2.5-2.5v-10c0-1.379,1.122-2.5,2.5-2.5h8.5v3h-8.5v1h8.5v3h-8.5v1h8.5v3h-8.5v1h8.5v3h-8.5Z"/>
</svg>

);
