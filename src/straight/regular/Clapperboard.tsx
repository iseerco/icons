import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Clapperboard = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m21,1H3C1.346,1,0,2.346,0,4v19h24V4c0-1.654-1.346-3-3-3Zm-9.211,6l4-4h3.422l-4,4h-3.422Zm-6.25,0l4-4h3.422l-4,4h-3.422Zm16.187-3.687c.17.179.274.421.274.687v3h-3.961l3.687-3.687Zm-18.726-.313h3.711L2.711,7h-.711v-3c0-.551.449-1,1-1Zm-1,18v-12h20v12H2Z"/>
</svg>

);
