import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const HouseBuilding = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M14.849,12.747l-5.448-4.265c-.824-.645-1.977-.646-2.801,0L1.151,12.746c-.731,.573-1.151,1.435-1.151,2.363v8.891H16V15.109c0-.929-.42-1.79-1.151-2.362Zm-.849,9.253H2v-6.891c0-.31,.14-.597,.384-.788l5.448-4.263c.098-.078,.236-.077,.336,0l5.448,4.265c.244,.19,.384,.478,.384,.787v6.891ZM6,15h4v4H6v-4Zm12-2h2v2h-2v-2Zm0,4h2v2h-2v-2ZM14,5h2v2h-2v-2Zm6,2h-2v-2h2v2Zm-6,2h2v2h-2v-2Zm4,0h2v2h-2v-2Zm6-6V24h-6v-2h4V3c0-.552-.448-1-1-1H13c-.552,0-1,.448-1,1V7.978l-2-1.565V3c0-.017,0-.035,.001-.052,.028-1.63,1.362-2.948,2.999-2.948h8c1.654,0,3,1.346,3,3Z"/></svg>

);
