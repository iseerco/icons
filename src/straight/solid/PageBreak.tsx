import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const PageBreak = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21.414,5h-4.414V.586l4.414,4.414Zm-4.414,8v2h5v9H2V15H7v-2H2V3C2,1.343,3.343,0,5,0H15V7h7v6h-5Zm-2,0h-6v2h6v-2Z"/></svg>

);
