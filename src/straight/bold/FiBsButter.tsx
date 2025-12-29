import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsButter = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24,16h-1V5.5c0-1.93-1.57-3.5-3.5-3.5H4.5c-1.93,0-3.5,1.57-3.5,3.5v10.5H0v3h1.036c.243,1.694,1.704,3,3.464,3h15c1.76,0,3.221-1.306,3.464-3h1.036v-3Zm-4-10.5v10.5h-2V5.5c0-.17-.012-.337-.036-.5h1.536c.275,0,.5.225.5.5Zm-16,0c0-.275.225-.5.5-.5h10c.275,0,.5.225.5.5v10.5H4V5.5Z"/>
</svg>

);
