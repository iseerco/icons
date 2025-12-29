import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FilesMedical = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m18,24H2V7c0-1.654,1.346-3,3-3v17s13,0,13,0v3ZM18,.139v3.861h3.861L18,.139Zm4,5.861v13H7V3c0-1.654,1.346-3,3-3h6v6h6Zm-4,4h-2.5v-2.5h-2v2.5h-2.5v2h2.5v2.5h2v-2.5h2.5v-2Z"/></svg>

);
