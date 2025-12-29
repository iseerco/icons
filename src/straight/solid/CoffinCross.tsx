import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CoffinCross = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m18.932,1.885c-.459-1.145-1.552-1.885-2.786-1.885H7.854c-1.234,0-2.327.74-2.786,1.886l-2.608,6.522,3.226,15.592h12.629l3.226-15.592-2.608-6.523Zm-2.932,9.115h-3v5h-2v-5h-3v-2h3v-3h2v3h3v2Z"/></svg>

);
