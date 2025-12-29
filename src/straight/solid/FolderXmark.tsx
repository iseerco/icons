import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FolderXmark = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M0,7v-3C0,2.35,1.35,1,3,1h5.24l4,2h8.76c1.65,0,3,1.35,3,3v1H0Zm24,2v14H0V9H24Zm-10.59,7l2.54-2.54-1.41-1.41-2.54,2.54-2.54-2.54-1.41,1.41,2.54,2.54-2.54,2.54,1.41,1.41,2.54-2.54,2.54,2.54,1.41-1.41-2.54-2.54Z"/></svg>

);
