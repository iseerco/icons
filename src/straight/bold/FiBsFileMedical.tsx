import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsFileMedical = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m13.5,12.5h2.5v3h-2.5v2.5h-3v-2.5h-2.5v-3h2.5v-2.5h3v2.5Zm8.5-6.835v18.335H2V3c0-1.654,1.346-3,3-3h11.381l5.619,5.665Zm-3,15.335v-13h-5V3H5v18h14Z"/></svg>

);
