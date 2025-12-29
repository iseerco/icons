import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsSwap = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m23.566,19l-4.236,4.629c-.443.494-1.217.494-1.66,0l-4.236-4.629h3.566v-10.25c0-.965-.785-1.75-1.75-1.75s-1.75.785-1.75,1.75v6.5c0,2.619-2.131,4.75-4.75,4.75s-4.75-2.131-4.75-4.75V5H.434L4.67.371c.443-.494,1.217-.494,1.66,0l4.236,4.629h-3.566v10.25c0,.965.785,1.75,1.75,1.75s1.75-.785,1.75-1.75v-6.5c0-2.619,2.131-4.75,4.75-4.75s4.75,2.131,4.75,4.75v10.25h3.566Z"/>
</svg>

);
