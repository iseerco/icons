import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsFunctionSquare = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m21.5,0H2.5C1.122,0,0,1.121,0,2.5v21.5h24V2.5c0-1.379-1.122-2.5-2.5-2.5Zm1.5,23H1V2.5c0-.827.673-1.5,1.5-1.5h19c.827,0,1.5.673,1.5,1.5v20.5ZM9.5,5h1.5v1h-1.5c-.827,0-1.5.673-1.5,1.5v4.5h2v1h-2v6h-1v-6h-2v-1h2v-4.5c0-1.379,1.122-2.5,2.5-2.5Zm6.578,9.966l2.456,4.034h-1.171l-1.87-3.072-1.87,3.072h-1.171l2.456-4.034-2.414-3.966h1.171l1.829,3.004,1.829-3.004h1.171l-2.414,3.966Z"/>
</svg>

);
