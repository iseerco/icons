import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Fence = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,7v2H0v-2H1V3.086L4,.086l3,3v3.914h2V3.086L12,.086l3,3v3.914h2V3.086L20,.086l3,3v3.914h1ZM9,24h6v-4h-6v4Zm-8,0H7v-4H1v4Zm16,0h6v-4h-6v4Zm6-13h-6v5h-2v-5h-6v5h-2v-5H1v5H0v2H24v-2h-1v-5Z"/></svg>

);
