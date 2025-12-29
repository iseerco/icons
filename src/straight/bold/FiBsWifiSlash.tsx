import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsWifiSlash = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M1.76,6.71l2.13,2.13c-.38,.3-.74,.62-1.08,.97L.69,7.69c.34-.34,.7-.67,1.07-.98Zm3.88,5.93l2.12,2.12c.35-.35,.73-.65,1.15-.9l-2.16-2.16c-.39,.28-.76,.6-1.11,.94Zm10.92,1.8l1.8-1.8c-1.66-1.66-3.9-2.59-6.24-2.63l-3.55-3.55c4.44-1.2,9.3,.03,12.61,3.35l2.12-2.12C18.84,3.21,12.06,1.81,6.2,4.08L2.16,.04,.04,2.16,21.84,23.96l2.12-2.12-7.4-7.4Zm-4.56,2.56c-1.1,0-2,.9-2,2s.9,2,2,2,2-.9,2-2-.9-2-2-2Z"/></svg>

);
