import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const OrganizationChart = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m1.5,18c0-1.105.895-2,2-2s2,.895,2,2-.895,2-2,2-2-.895-2-2Zm8.5,0c0,1.105.895,2,2,2s2-.895,2-2-.895-2-2-2-2,.895-2,2Zm2-14c1.105,0,2-.895,2-2s-.895-2-2-2-2,.895-2,2,.895,2,2,2Zm6.5,14c0,1.105.895,2,2,2s2-.895,2-2-.895-2-2-2-2,.895-2,2Zm-14-5.5c0-.275.224-.5.5-.5h6v2h2v-2h6c.276,0,.5.225.5.5v1.5h2v-1.5c0-1.379-1.122-2.5-2.5-2.5H5c-1.378,0-2.5,1.121-2.5,2.5v1.5h2v-1.5Zm.5,8.5h-3c-1.103,0-2,.897-2,2v1h2v-1h3v1h2v-1c0-1.103-.897-2-2-2Zm17,0h-3c-1.103,0-2,.897-2,2v1h2v-1h3v1h2v-1c0-1.103-.897-2-2-2Zm-8.5,0h-3c-1.103,0-2,.897-2,2v1h2v-1h3v1h2v-1c0-1.103-.897-2-2-2Zm-3-14h3v1h2v-1c0-1.103-.897-2-2-2h-3c-1.103,0-2,.897-2,2v1h2v-1Z"/>
</svg>

);
