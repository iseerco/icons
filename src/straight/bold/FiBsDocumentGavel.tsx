import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsDocumentGavel = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M17.189,19.311l-1.323,1.323,.75,.75-1.414,1.414-5-5,1.414-1.414,.75,.75,4.677-4.677-.75-.75,1.414-1.414,5,5-1.414,1.414-.75-.75-1.232,1.232,4.75,4.75-2.121,2.121-4.75-4.75Zm-14.189,1.689V3H12v5h6.243l1.757,1.757V5.665L14.382,0H3C1.346,0,0,1.346,0,3V24H13.576l-3-3H3Z"/>
</svg>

);
