import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Floor = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24.017,7.497L12,.075-.017,7.497l12.017,7.422,12.017-7.422Zm-15.224,3.09l4.235-2.6,3.204,1.967-4.231,2.614-3.208-1.981Zm9.344-1.809l-3.199-1.964,2.09-1.283,3.182,1.966-2.073,1.281Zm-3.014-4.424l-4.283,2.63-3.119-1.915,4.28-2.644,3.122,1.929Zm-9.308,1.892l3.113,1.911-2.041,1.253-3.098-1.913,2.025-1.251Zm6.186,10.826l12-7.412v2.35l-12,7.412L0,12.01v-2.35l12,7.412Zm0,4.497l12-7.412v2.35l-12,7.412L0,16.507v-2.35l12,7.412Z"/>
</svg>

);
