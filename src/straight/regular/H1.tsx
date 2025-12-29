import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const H1 = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m12,4h2v16h-2v-7H4v7h-2V4h2v7h8v-7Zm8.492,0l-3.708,3.802,1.432,1.396,1.784-1.829v12.631h2V4h-1.508Z"/></svg>

);
