import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const HouseChimneyBlank = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22.849,7.681l-.886-.693h.037V1.987h-2v3.464L13.849,.638c-1.088-.854-2.609-.854-3.697,0L1.151,7.68c-.731,.573-1.151,1.435-1.151,2.363v13.957H24V10.043c0-.929-.42-1.79-1.151-2.362Z"/></svg>

);
