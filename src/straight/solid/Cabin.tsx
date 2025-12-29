import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Cabin = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22.849,7.681l-.87-.681h.021V2h-2v3.451L13.849,.637c-1.089-.85-2.608-.851-3.697,0L1.151,7.68c-.731,.573-1.151,1.435-1.151,2.363v.957H24v-.957c0-.929-.42-1.79-1.151-2.362Zm-10.849,.319c-.828,0-1.5-.672-1.5-1.5s.672-1.5,1.5-1.5,1.5,.672,1.5,1.5-.672,1.5-1.5,1.5Zm-4,5v11H0v-3H6v-2H0v-2H6v-2H0v-2H8Zm16,0v2h-6v2h6v2h-6v2h6v3h-8V13h8Z"/></svg>

);
