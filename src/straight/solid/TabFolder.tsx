import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const TabFolder = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m0,10h24v13H0v-13Zm21-6h-.821l-.589-1.632c-.272-.817-1.037-1.368-1.897-1.368h-2.648l1.051,3h-2.071l-.589-1.632c-.272-.817-1.036-1.368-1.897-1.368h-2.642l1.051,3h-2.071l-1.061-3h-3.816C1.346,1,0,2.346,0,4v4h24v-1c0-1.657-1.343-3-3-3Z"/>
</svg>

);
