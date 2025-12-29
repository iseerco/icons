import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsTabFolder = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m21,4h-.865l-.544-1.632c-.272-.817-1.037-1.368-1.897-1.368h-2.648l1,3h-2.064l-.544-1.632c-.272-.817-1.036-1.368-1.897-1.368h-2.642l1,3h-2.079l-.544-1.632c-.272-.817-1.036-1.368-1.897-1.368h-2.376C1.343,1,0,2.343,0,4v19h24V7c0-1.657-1.343-3-3-3Zm0,16H3v-12h18v12Z"/>
</svg>

);
