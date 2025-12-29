import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsLeft = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M11,23.67L.77,13.84c-.5-.5-.77-1.15-.77-1.84,0-.69,.27-1.34,.76-1.83h0S11,.33,11,.33V7h13v10H11v6.67ZM1.47,10.88c-.3,.3-.47,.7-.47,1.12,0,.43,.17,.83,.47,1.13l8.53,8.2v-5.33h13V8H10V2.67L1.47,10.88Z"/></svg>

);
