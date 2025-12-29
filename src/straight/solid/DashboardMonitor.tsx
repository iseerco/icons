import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const DashboardMonitor = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M24,19V4c0-1.654-1.346-3-3-3H3C1.346,1,0,2.346,0,4v15H11v2H6v2h12v-2h-5v-2h11ZM16,5h5v2h-5v-2Zm0,4h5v2h-5v-2Zm0,4h5v2h-5v-2Zm-8,2c-2.761,0-5-2.239-5-5,0-2.419,1.718-4.436,4-4.899v5.313l3.754,3.754c-.79,.523-1.736,.832-2.754,.832Zm4.168-2.246l-3.168-3.168V5.101c2.282,.463,4,2.48,4,4.899,0,1.019-.308,1.964-.832,2.754Z"/>
</svg>

);
