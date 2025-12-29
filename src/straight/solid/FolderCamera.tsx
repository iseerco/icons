import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FolderCamera = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M0,6V3C0,1.346,1.346,0,3,0h5.236l4,2h8.764c1.654,0,3,1.346,3,3v1H0Zm24,10.5v7.5H13v-7.5c0-.828,.672-1.5,1.5-1.5h.696l1.285-2h4.037l1.285,2h.696c.828,0,1.5,.672,1.5,1.5Zm-3.5,3c0-1.105-.895-2-2-2s-2,.895-2,2,.895,2,2,2,2-.895,2-2Zm-9.5-3c0-1.791,1.352-3.272,3.089-3.476l1.301-2.024h6.221l1.301,2.024c.387,.045,.751,.163,1.089,.325v-5.349H0v14H11v-5.5Z"/>
</svg>

);
