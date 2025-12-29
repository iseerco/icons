import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsReflectHorizontal = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M0,2.61V21.39l8.13-7.44c.55-.49,.87-1.2,.87-1.94s-.32-1.45-.86-1.93L0,2.61ZM3.01,14.57v-5.15l2.81,2.57-2.81,2.57Zm12.86-4.52c-.55,.5-.87,1.2-.87,1.94s.32,1.45,.86,1.93l8.14,7.45V2.62l-8.13,7.44ZM10.5,0h3V24h-3V0Z"/></svg>

);
