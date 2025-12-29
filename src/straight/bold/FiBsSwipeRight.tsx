import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsSwipeRight = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m23.74,5.128l-3.74,3.372v-2.5h-6v-3h6V.5l3.74,3.371c.347.347.347.91,0,1.257Zm-14.615,4.579l12,3.13v11.15l-15,.009L.859,19.605c-.866-.722-.983-2.008-.261-2.874.722-.866,2.008-.983,2.874-.261l2.64,2.222V3.496c0-.911.799-1.632,1.739-1.479.737.12,1.273.812,1.273,1.56v6.13Zm0,3.1v8.197l9-.013v-5.836l-9-2.348Z"/>
</svg>

);
