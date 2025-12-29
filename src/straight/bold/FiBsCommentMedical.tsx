import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsCommentMedical = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m12,0C5.383,0,0,5.383,0,12s5.383,12,12,12h12v-12C24,5.383,18.617,0,12,0Zm9,21h-9c-4.962,0-9-4.038-9-9S7.038,3,12,3s9,4.038,9,9v9Zm-7.5-10.5h2.5v3h-2.5v2.5h-3v-2.5h-2.5v-3h2.5v-2.5h3v2.5Z"/></svg>

);
