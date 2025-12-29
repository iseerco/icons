import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const KeyboardDown = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m21.5,3H2.5c-1.378,0-2.5,1.122-2.5,2.5v11.5h24V5.5c0-1.378-1.122-2.5-2.5-2.5Zm.5,12H2V5.5c0-.276.224-.5.5-.5h19c.276,0,.5.224.5.5v9.5ZM4,7h3v2h-3v-2Zm8,2h-3v-2h3v2Zm2-2h6v2h-6v-2Zm-6,4h8v2h-8v-2Zm10,0h2v2h-2v-2Zm-14,0h2v2h-2v-2Zm11.293,7.707l1.414,1.414-3.293,3.293c-.39.39-.902.585-1.414.585s-1.024-.195-1.414-.585l-3.293-3.293,1.414-1.414,3.293,3.293,3.293-3.293Z"/>
</svg>

);
