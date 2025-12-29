import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsWindowRestore = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M15.5,6H2.5c-1.38,0-2.5,1.12-2.5,2.5v15.5H18V8.5c0-1.38-1.12-2.5-2.5-2.5ZM2.5,7H15.5c.83,0,1.5,.67,1.5,1.5v2.5H1v-2.5c0-.83,.67-1.5,1.5-1.5ZM1,23V12H17v11H1ZM24,2.5v15.5h-4v-1h3V2.5c0-.83-.67-1.5-1.5-1.5H8.5c-.83,0-1.5,.67-1.5,1.5v1.5h-1v-1.5c0-1.38,1.12-2.5,2.5-2.5h13c1.38,0,2.5,1.12,2.5,2.5Z"/></svg>

);
