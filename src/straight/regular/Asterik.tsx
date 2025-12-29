import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Asterik = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m16 24h-8v-4.9l-3.854 2.4-4.138-6.645 4.585-2.855-4.585-2.855 4.138-6.645 3.854 2.4v-4.9h8v4.9l3.854-2.4 4.138 6.648-4.585 2.852 4.585 2.855-4.138 6.645-3.854-2.4zm-6-2h4v-6.5l5.213 3.247 2.025-3.247-5.614-3.5 5.614-3.5-2.025-3.248-5.213 3.248v-6.5h-4v6.5l-5.213-3.248-2.025 3.248 5.614 3.5-5.614 3.5 2.025 3.252 5.213-3.252z"/></svg>
);
