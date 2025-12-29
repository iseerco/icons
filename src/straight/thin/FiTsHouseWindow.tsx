import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsHouseWindow = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M23.045,8.034L13.545,.566c-.908-.715-2.182-.715-3.09,0L.955,8.034c-.607,.477-.955,1.193-.955,1.966v14H24V10c0-.772-.348-1.488-.955-1.966Zm-.045,14.966H1V10c0-.464,.209-.894,.572-1.179L11.072,1.354c.547-.43,1.309-.43,1.855,0l9.5,7.468c.363,.285,.572,.715,.572,1.179v13Zm-15-5h8V10H8v8Zm1-7h6v6h-6v-6Z"/></svg>

);
