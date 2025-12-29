import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const TabFolder = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m21,3h-1.199l-.211-.632c-.272-.817-1.037-1.368-1.897-1.368h-2.648l.667,2h-2.064l-.211-.632c-.272-.817-1.036-1.368-1.897-1.368h-2.642l.667,2h-1.902l-.846-2h-3.816C1.346,1,0,2.346,0,4v19h24V6c0-1.654-1.346-3-3-3ZM3,3h2.491l.846,2h14.663c.552,0,1,.448,1,1v1H2v-3c0-.552.449-1,1-1Zm-1,18v-12h20v12H2Z"/>
</svg>

);
