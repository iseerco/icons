import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Timeline = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m24 13v-2h-5v-3.142c1.72-.447 3-1.999 3-3.858 0-2.206-1.794-4-4-4s-4 1.794-4 4c0 1.859 1.28 3.411 3 3.858v3.142h-10v-3.142c1.72-.447 3-1.999 3-3.858 0-2.206-1.794-4-4-4s-4 1.794-4 4c0 1.859 1.28 3.411 3 3.858v3.142h-5v2h11v3.142c-1.72.447-3 1.999-3 3.858 0 2.206 1.794 4 4 4s4-1.794 4-4c0-1.859-1.28-3.411-3-3.858v-3.142zm-8-9c0-1.103.897-2 2-2s2 .897 2 2-.897 2-2 2-2-.897-2-2zm-12 0c0-1.103.897-2 2-2s2 .897 2 2-.897 2-2 2-2-.897-2-2zm10 16c0 1.103-.897 2-2 2s-2-.897-2-2 .897-2 2-2 2 .897 2 2z"/></svg>
);
