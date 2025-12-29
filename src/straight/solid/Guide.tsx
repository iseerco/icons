import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Guide = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24,2.462l-4,2.538v6.5l-6,6v6.5H0v-5.5c0-2.481,2.019-4.5,4.5-4.5h8.138l5.362-4.469V0h2l4,2.462Zm-9,2.538v-2h-2.806c-1.039-1.792-2.978-3-5.194-3C4.032,0,1.561,2.166,1.084,5h13.916Zm-8,7c2.968,0,5.439-2.166,5.916-5H1.084c.477,2.834,2.948,5,5.916,5Z"/>
</svg>

);
