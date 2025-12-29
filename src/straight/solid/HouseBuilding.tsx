import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const HouseBuilding = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21,0H13c-1.654,0-3,1.346-3,3v3.499c.219,.117,.431,.251,.633,.409l3.367,2.636v-.543h2v2.108l.081,.063c1.22,.954,1.919,2.39,1.919,3.938v1.891h2v2h-2v5h6V3c0-1.654-1.346-3-3-3Zm-5,7h-2v-2h2v2Zm4,8h-2v-2h2v2Zm0-4h-2v-2h2v2Zm0-4h-2v-2h2v2Zm-5.151,5.747l-5.448-4.265c-.824-.645-1.977-.646-2.801,0L1.151,12.746c-.731,.573-1.151,1.435-1.151,2.363v8.891H16V15.109c0-.929-.42-1.79-1.151-2.362Zm-4.849,6.253H6v-4h4v4Z"/></svg>

);
