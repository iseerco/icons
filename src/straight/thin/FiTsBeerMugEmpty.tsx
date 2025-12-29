import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsBeerMugEmpty = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m11,18h-1V6h1v12Zm4-12h-1v12h1V6Zm-8,0h-1v12h1V6Zm17,2.5v7.5h-5v4.5c0,1.379-1.122,2.5-2.5,2.5H4.5c-1.378,0-2.5-1.121-2.5-2.5V2H0v-1h21v1h-2v4h2.5c1.378,0,2.5,1.121,2.5,2.5Zm-6-6.5H3v18.5c0,.827.673,1.5,1.5,1.5h12c.827,0,1.5-.673,1.5-1.5V2Zm5,6.5c0-.827-.673-1.5-1.5-1.5h-2.5v8h4v-6.5Z"/>
</svg>

);
