import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Gun = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M24,4v3h-1v2H0V4H0c1.105,0,2-.895,2-2h0s17,0,17,0V1h2v1h2v2h1ZM13.776,13.931c-.188,.629-.779,1.069-1.437,1.069h-3.521l.662-2h2.519v-2H3.01c.021,.272,.009,.548-.067,.814L0,20.332v1.668H6.5l1.656-5h4.184c1.558,0,2.905-1.002,3.353-2.494l1.052-3.506h-2.089l-.879,2.931Z"/>
</svg>

);
