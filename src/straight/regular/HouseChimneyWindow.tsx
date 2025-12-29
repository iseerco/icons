import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const HouseChimneyWindow = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22.849,7.681l-.849-.664V2h-2v3.451L13.849,.637c-1.089-.85-2.608-.851-3.697,0L1.151,7.68c-.731,.573-1.151,1.435-1.151,2.363v13.957H24V10.043c0-.929-.42-1.79-1.151-2.362Zm-.849,14.319H2V10.043c0-.31,.14-.597,.384-.788L11.384,2.213c.362-.285,.87-.284,1.232,0l9,7.044c.244,.19,.384,.478,.384,.787v11.957Zm-14-4h8V10H8v8Zm2-6h4v4h-4v-4Z"/></svg>

);
