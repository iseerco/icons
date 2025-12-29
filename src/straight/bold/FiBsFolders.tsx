import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsFolders = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M20.5,3h-4.646L11.854,1h-3.354c-1.93,0-3.5,1.57-3.5,3.5v13.5H24V6.5c0-1.93-1.57-3.5-3.5-3.5ZM8,15v-7h13v7H8Zm-5,5H19v3H0V8.524c0-1.469,.937-2.789,2.332-3.286l.668-.238v15Z"/></svg>

);
