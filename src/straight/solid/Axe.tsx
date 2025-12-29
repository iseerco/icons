import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Axe = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24,7.008c0,5.294-3.698,8.992-8.992,8.992h-1.053l.054-1.053c.041-.795-.076-3.082-1.091-4.097l-4.749-4.768L14.091.162l3.659,3.674,2.037-2.037,1.414,1.414-2.006,2.006c1.128.757,3.036.833,3.743.791l1.06-.064.002,1.062ZM.049,21.537l1.414,1.414,10.494-10.494-1.414-1.414L.049,21.537Z"/>
</svg>

);
