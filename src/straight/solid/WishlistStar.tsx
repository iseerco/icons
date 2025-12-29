import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const WishlistStar = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m19.5,0H4.5c-1.378,0-2.5,1.121-2.5,2.5v21.456l10-7.223,10,7.223V2.5c0-1.379-1.122-2.5-2.5-2.5Zm-2.5,7.833l-2.545,1.736,1.059,3.318-.681.476-2.818-1.948-2.776,1.948-.656-.494.984-3.351-2.566-1.68v-.838h3.5l1.071-3.636h.882l1.069,3.636h3.478v.833Z"/>
</svg>

);
