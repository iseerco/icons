import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FolderMath = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M21,3H12.236L8.236,1H3C1.346,1,0,2.346,0,4V23H24V6c0-1.654-1.346-3-3-3ZM4,8h2v-2h2v2h2v2h-2v2h-2v-2h-2v-2Zm6.207,11.293l-1.414,1.414-1.793-1.793-1.793,1.793-1.414-1.414,1.793-1.793-1.793-1.793,1.414-1.414,1.793,1.793,1.793-1.793,1.414,1.414-1.793,1.793,1.793,1.793Zm9.793,.707h-6v-2h6v2Zm0-3h-6v-2h6v2Zm0-7h-6v-2h6v2Z"/>
</svg>

);
