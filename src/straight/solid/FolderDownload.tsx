import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FolderDownload = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M0,23H24V9H0v14Zm8.709-7.294l2.291,2.291v-6.997h2v7.008l2.291-2.302,1.414,1.414-3.299,3.299c-.388,.388-.897,.581-1.406,.581s-1.019-.193-1.406-.58l-3.299-3.3,1.414-1.414ZM24,6v1H0v-3C0,2.346,1.346,1,3,1h5.236l4,2h8.764c1.654,0,3,1.346,3,3Z"/></svg>

);
