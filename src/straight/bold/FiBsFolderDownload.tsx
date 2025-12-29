import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsFolderDownload = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M16.5,19l-3.793,3.707c-.391,.391-1.024,.391-1.414,0l-3.793-3.707h3v-8h3v8h3ZM20.5,3H12.354L8.354,1H3.5C1.57,1,0,2.57,0,4.5V23H8.718l-3.001-3H3V8H21v12h-2.821l-3,3h8.821V6.5c0-1.93-1.57-3.5-3.5-3.5Z"/></svg>

);
