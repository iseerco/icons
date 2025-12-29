import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const DashboardPanel = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M21,3H3c-1.654,0-3,1.346-3,3v15H24V6c0-1.654-1.346-3-3-3Zm-13,14.5c-2.761,0-5-2.239-5-5,0-2.419,1.718-4.436,4-4.899v5.313l3.754,3.754c-.79,.523-1.736,.832-2.754,.832Zm4.168-2.246l-3.168-3.168V7.601c2.282,.463,4,2.48,4,4.899,0,1.019-.308,1.964-.832,2.754Zm8.832,1.746h-5v-2h5v2Zm0-4h-5v-2h5v2Zm0-4h-5v-2h5v2Z"/>
</svg>

);
