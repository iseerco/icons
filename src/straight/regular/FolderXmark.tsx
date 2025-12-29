import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FolderXmark = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M15.95,12.46l-2.54,2.54,2.54,2.54-1.41,1.41-2.54-2.54-2.54,2.54-1.41-1.41,2.54-2.54-2.54-2.54,1.41-1.41,2.54,2.54,2.54-2.54,1.41,1.41Zm8.05-6.46V23H0V4C0,2.35,1.35,1,3,1h5.24l4,2h8.76c1.65,0,3,1.35,3,3ZM2,4v3H22v-1c0-.55-.45-1-1-1H11.76L7.76,3H3c-.55,0-1,.45-1,1ZM22,21V9H2v12H22Z"/></svg>

);
