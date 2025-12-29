import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const PlugCircleExclamation = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M18,12c-3.314,0-6,2.686-6,6s2.686,6,6,6,6-2.686,6-6-2.686-6-6-6Zm1,2v5h-2v-5h2Zm-2,8v-2h2v2h-2Zm-7-4v6h-2v-6h-1c-3.309,0-6-2.691-6-6v-4H0v-2H4V0h2V6h6V0h2V6h4v2h-1v2.069c-3.945,.493-7,3.852-7,7.931Z"/>
</svg>

);
