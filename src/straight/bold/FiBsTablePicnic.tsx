import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsTablePicnic = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,12h-3.808l-2.538-6h3.346V3H3v3h3.346l-2.538,6H0v3H2.538L0,21H3l2.538-6h12.923l2.538,6h3l-2.538-6h2.538v-3Zm-17.192,0l2.539-6h5.308l2.539,6H6.808Z"/></svg>

);
