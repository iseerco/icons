import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsDumpster = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m20.5,0H3.5C1.57,0,0,1.57,0,3.5v4l1.12,13.5h2.93c-.033.162-.05.329-.05.5,0,1.381,1.119,2.5,2.5,2.5s2.5-1.119,2.5-2.5c0-.171-.017-.338-.05-.5h6.1c-.033.162-.05.329-.05.5,0,1.381,1.119,2.5,2.5,2.5s2.5-1.119,2.5-2.5c0-.171-.017-.338-.05-.5h2.93l1.115-13.375.005-4.125c0-1.93-1.57-3.5-3.5-3.5Zm.5,3.5v2.5h-2v-3h1.5c.275,0,.5.225.5.5Zm-13,2.5v-3h2.5v3h-2.5Zm5.5-3h2.5v3h-2.5v-3Zm-10,0h1.5v3h-2v-2.5c0-.275.224-.5.5-.5Zm.38,15l-.75-9h17.74l-.75,9H3.88Z"/>
</svg>

);
