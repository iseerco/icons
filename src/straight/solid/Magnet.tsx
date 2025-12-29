import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Magnet = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m17,7h7v5.002c0,3.247-1.276,6.288-3.593,8.563-2.263,2.221-5.24,3.437-8.405,3.437-.075,0-.15,0-.226-.002-6.493-.119-11.776-5.665-11.776-12.363v-4.637h7v5c0,2.761,2.239,5,5,5s5-2.239,5-5v-5ZM7,0H0v5h7V0Zm10,0v5h7V0h-7Z"/>
</svg>

);
