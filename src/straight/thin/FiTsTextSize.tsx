import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsTextSize = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,14v1h-1v-1c0-.55-.45-1-1-1h-3v10h-1V13h-3c-.55,0-1,.45-1,1v1h-1v-1c0-1.1,.9-2,2-2h7c1.1,0,2,.9,2,2ZM16.5,2c.83,0,1.5,.67,1.5,1.5v1.5h1v-1.5c0-1.38-1.12-2.5-2.5-2.5H2.5C1.12,1,0,2.12,0,3.5v1.5H1v-1.5c0-.83,.67-1.5,1.5-1.5h6.5V23h1V2h6.5Z"/></svg>

);
