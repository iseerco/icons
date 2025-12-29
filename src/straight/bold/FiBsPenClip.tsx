import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsPenClip = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22.42,.89c-1.62-1.33-4.1-1.16-5.65,.39l-.55,.55-.74-.74c-1.46-1.46-3.82-1.46-5.28,0L5.51,5.79l2.12,2.12L12.33,3.22c.29-.29,.75-.29,1.03,0l.74,.74L4.02,14.04c-1.14,1.14-1.58,3.93-1.74,5.51l-2.27,2.27,2.12,2.12,2.31-2.31c1.59-.17,4.32-.61,5.44-1.74L22.73,7.03c.83-.83,1.27-1.97,1.21-3.13-.06-1.17-.61-2.26-1.52-3ZM7.76,17.76c-.26,.22-1.2,.49-2.3,.69,.2-1.11,.46-2.04,.68-2.29L16.22,6.08l1.61,1.61L7.76,17.76Z"/></svg>

);
