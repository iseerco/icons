import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FloorLayer = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m11,22.824L0,17.549v-3.381l11,5.284v3.372Zm2-.002l11-5.312v-3.323l-11,5.267v3.369ZM12,.714L0,6.5v5.536l11,5.274v-3.372L2,9.616v-2.166l10,4.751,10-4.751v2.181l-9,4.309v3.369l11-5.312v-5.497L12,.714Z"/>
</svg>

);
