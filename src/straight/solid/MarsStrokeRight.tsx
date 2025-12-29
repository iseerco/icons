import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const MarsStrokeRight = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M23.414,10.586l-3.5-3.5-1.414,1.414,2.5,2.5h-4v-3h-2v3h-1.08c-.488-3.387-3.401-6-6.92-6C3.141,5,0,8.14,0,12s3.141,7,7,7c3.519,0,6.432-2.613,6.92-6h1.08v3h2v-3h4l-2.5,2.5,1.414,1.414,3.5-3.5c.78-.78,.78-2.048,0-2.828Z"/></svg>

);
