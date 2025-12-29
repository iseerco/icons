import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const HouseCrack = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22.849,7.681L13.849,.637c-1.089-.85-2.608-.851-3.697,0L1.151,7.68c-.731,.573-1.151,1.435-1.151,2.363v13.957H9.176l1.96-5h-3.23c-.722,0-1.153-.804-.754-1.406l5.648-8.594h1.199l-1.827,6h3.904c.619,0,1.062,.597,.883,1.19l-2.619,7.81h9.659V10.043c0-.929-.42-1.79-1.151-2.362Z"/></svg>

);
