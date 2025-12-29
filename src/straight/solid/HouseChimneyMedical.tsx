import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const HouseChimneyMedical = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22.849,7.681l-.87-.681h.021V2h-2v3.451L13.849,.638c-1.088-.854-2.609-.854-3.697,0L1.151,7.68c-.731,.573-1.151,1.435-1.151,2.363v13.957H24V10.043c0-.929-.42-1.79-1.151-2.362Zm-4.849,9.319h-3v3h-6v-3h-3v-6h3v-3h6v3h3v6Zm-5-4h3v2h-3v3h-2v-3h-3v-2h3v-3h2v3Z"/></svg>

);
