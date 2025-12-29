import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Supplier = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m9,12c-3.309,0-6-2.691-6-6S5.691,0,9,0s6,2.691,6,6-2.691,6-6,6Zm12.5,2h-6c-1.378,0-2.5,1.121-2.5,2.5v7.5h11v-7.5c0-1.379-1.122-2.5-2.5-2.5Zm-1.5,5h-3v-2h3v2Zm-9-3.255l-2,2.25-3.551-3.995h-.449c-2.757,0-5,2.243-5,5v5h11v-8.255Z"/>
</svg>

);
