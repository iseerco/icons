import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsFolderUpload = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,6.5V23H16v-3h5V8H3v12H8v3H0V4.5C0,2.57,1.57,1,3.5,1h4.854l4,2h8.146c1.93,0,3.5,1.57,3.5,3.5Zm-7.5,8.5l-3.793-3.707c-.391-.391-1.024-.391-1.414,0l-3.793,3.707h3v8h3V15h3Z"/></svg>

);
