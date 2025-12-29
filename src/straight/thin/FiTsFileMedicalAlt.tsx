import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsFileMedicalAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m6.768,15H0v-1h6.232l2.33-3.494,3,6,1.67-2.506h4.768v1h-4.232l-2.33,3.494-3-6-1.67,2.506Zm15.232-7.707v16.707H2v-7h1v6h18v-15h-7V1H4.5c-.827,0-1.5.673-1.5,1.5v9.5h-1V2.5c0-1.378,1.122-2.5,2.5-2.5h10.207l7.293,7.293Zm-7-.293h5.293L15,1.707v5.293Z"/></svg>

);
