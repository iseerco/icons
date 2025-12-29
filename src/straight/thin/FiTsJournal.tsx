import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsJournal = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m14.5,0H2v3H0v1h2v3.5H0v1h2v3H0v1h2v3H0v1h2v3.5H0v1h2v3h12.5c1.378,0,2.5-1.121,2.5-2.5V2.5c0-1.379-1.122-2.5-2.5-2.5Zm1.5,21.5c0,.827-.673,1.5-1.5,1.5H3V1h11.5c.827,0,1.5.673,1.5,1.5v19ZM6,6h7v1h-7v-1ZM21.5,0c-1.378,0-2.5,1.121-2.5,2.5v19.015l2.5,2.5,2.5-2.5V2.5c0-1.379-1.122-2.5-2.5-2.5Zm1.5,21.101l-1.5,1.5-1.5-1.5V2.5c0-.827.673-1.5,1.5-1.5s1.5.673,1.5,1.5v18.601Z"/>
</svg>

);
