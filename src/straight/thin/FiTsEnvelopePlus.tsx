import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsEnvelopePlus = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m24,4v1h-4v4h-1v-4h-4v-1h4V0h1v4h4Zm-1,19H1V6.883l7.799,7.799c.877.877,2.03,1.316,3.182,1.316s2.304-.438,3.182-1.316h0s0,0,0,0l3.515-3.682h-1.385l-2.837,2.975h0s0,0,0,0c-1.365,1.364-3.585,1.364-4.95,0L1.232,5.701c.266-.421.735-.701,1.268-.701h10.5v-1H2.5C1.122,4,0,5.122,0,6.5v17.5h24V7h-1v16Z"/></svg>

);
