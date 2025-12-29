import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsPrescription = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m21,13h-1.191l-2.958,4.579-3.679-5.694c2.749-.547,4.828-2.977,4.828-5.885,0-3.309-2.691-6-6-6h-6.5c-1.378,0-2.5,1.121-2.5,2.5v17.5h1v-8h8.056l4.2,6.5-3.554,5.5h1.191l2.958-4.579,2.958,4.579h1.191l-3.554-5.5,3.554-5.5Zm-9-2H4V2.5c0-.827.673-1.5,1.5-1.5h6.5c2.757,0,5,2.243,5,5s-2.243,5-5,5Z"/></svg>

);
