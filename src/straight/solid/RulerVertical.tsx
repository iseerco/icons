import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const RulerVertical = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M13,19v-2h4v-2h-4v-2h4v-2h-4v-2h4v-2h-4v-2h4V0h-7c-1.654,0-3,1.346-3,3V21c0,1.654,1.346,3,3,3h7v-5h-4Z"/></svg>

);
