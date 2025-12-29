import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Desk = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M24,19v5H15v-5h9Zm-9-2h9v-5H13v-2h6V2c0-1.103-.897-2-2-2H7c-1.103,0-2,.897-2,2V10h6v2H0v2H2v10h2V14H15v3Z"/>
</svg>

);
