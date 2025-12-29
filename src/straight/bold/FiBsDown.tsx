import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsDown = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,24h0c-.88,0-1.71-.35-2.33-.97h-.01S-.01,13-.01,13H7V0h10V13h7.04l-9.69,10.02c-.64,.64-1.47,.98-2.35,.98Zm-.2-3.08c.07,.07,.15,.08,.2,.08h0c.05,0,.13-.01,.21-.09l4.75-4.91h-2.96V3h-4v13h-2.95l4.75,4.92Z"/></svg>

);
