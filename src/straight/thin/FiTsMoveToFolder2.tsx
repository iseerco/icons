import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsMoveToFolder2 = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M23.43,19.89l-3.2,3.2-.71-.71,3.2-3.2c.06-.06,.11-.12,.15-.19H12v-1h10.87c-.04-.07-.09-.13-.15-.19l-3.2-3.2,.71-.71,3.2,3.2c.77,.77,.77,2.02,0,2.79ZM1,22H17v1H0V3.5C0,2.12,1.12,1,2.5,1h5.62l4,2h9.38c1.38,0,2.5,1.12,2.5,2.5V15.3l-1-1v-6.3H1v14ZM1,3.5v3.5H23v-1.5c0-.83-.67-1.5-1.5-1.5H11.88L7.88,2H2.5c-.83,0-1.5,.67-1.5,1.5Z"/></svg>

);
