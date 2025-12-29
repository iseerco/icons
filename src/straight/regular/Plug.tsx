import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Plug = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m23,7h-6V0h-2v7h-6V0h-2v7H1v2h2v5c0,3.86,3.141,7,7,7h1v3h2v-3h1c3.859,0,7-3.14,7-7v-5h2v-2Zm-4,7c0,2.757-2.243,5-5,5h-4c-2.757,0-5-2.243-5-5v-5h14v5Z"/>
</svg>

);
