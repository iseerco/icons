import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const GovernmentFlag = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m23,14v-1.526c0-1.032-.563-1.979-1.469-2.474,0,0-8.412-4.578-8.531-4.624v-1.349l3-1.944L11,0v5.376c-.119.045-8.531,4.624-8.531,4.624-.906.493-1.469,1.441-1.469,2.474v1.526h2v8H1v2h22v-2h-2v-8h2ZM3.426,11.756l8.182-4.463c.245-.135.538-.135.783,0l8.183,4.463c.111.061.204.145.274.244H3.151c.071-.1.164-.184.275-.244Zm7.574,2.244v8h-2v-8h2Zm2,0h2v8h-2v-8Zm-8,0h2v8h-2v-8Zm14,8h-2v-8h2v8Z"/>
</svg>

);
