import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const WarehouseAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,24h-5V13c0-1.105-.895-2-2-2H7c-1.105,0-2,.895-2,2v11H0V10.043c0-.923,.425-1.794,1.151-2.363L10.151,.637c1.086-.85,2.611-.85,3.697,0l9,7.043c.727,.569,1.151,1.44,1.151,2.363v13.957Zm-13-4h-3v4h3v-4Zm0-6h-3v4h3v-4Zm5,6h-3v4h3v-4Z"/></svg>

);
