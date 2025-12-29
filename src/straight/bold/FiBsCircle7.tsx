import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsCircle7 = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M11.035,18.275l-2.694-1.318,3.896-7.957h-4.236v-3h8v2.135l-4.965,10.141Zm12.965-6.275C24,5.383,18.617,0,12,0S0,5.383,0,12s5.383,12,12,12,12-5.383,12-12Zm-3,0c0,4.963-4.038,9-9,9S3,16.963,3,12,7.038,3,12,3s9,4.037,9,9Z"/></svg>

);
