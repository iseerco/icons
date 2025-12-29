import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsWineBottle = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m19.451,10.198l-4.441-2.961V.006h-6v7.231l-4.441,2.961c-.976.651-1.559,1.739-1.559,2.912v10.896h18v-10.896c0-1.173-.583-2.262-1.559-2.912ZM14.01,1.006v1.999h-4v-1.999h4Zm6,22H4.01v-8h14v-1H4.01v-.896c0-.837.416-1.615,1.113-2.08l4.887-3.258v-3.768h4v3.768l4.887,3.258c.697.464,1.113,1.242,1.113,2.08v9.896Z"/></svg>

);
