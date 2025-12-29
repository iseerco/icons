import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Circle9 = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm4,13c0,2.757-2.243,5-5,5h-2v-2h2c1.493,0,2.725-1.1,2.953-2.53-.58,.328-1.24,.53-1.953,.53-2.206,0-4-1.794-4-4s1.794-4,4-4,4,1.794,4,4v3Zm-4-1c-1.103,0-2-.897-2-2s.897-2,2-2,2,.897,2,2-.897,2-2,2Z"/></svg>

);
