import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsHouseChimneyWindow = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M23.045,8.034l-2.045-1.607V2h-1v3.641L13.545,.567c-.91-.717-2.181-.716-3.09,0L.955,8.034c-.607,.478-.955,1.193-.955,1.966v14H24V10c0-.772-.348-1.488-.955-1.966Zm-.045,14.966H1V10c0-.463,.209-.893,.573-1.179L11.073,1.353c.546-.428,1.308-.429,1.854,0l9.5,7.468c.364,.286,.573,.716,.573,1.179v13Zm-15-5h8V10H8v8Zm1-7h6v6h-6v-6Z"/></svg>

);
