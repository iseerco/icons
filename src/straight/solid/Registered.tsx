import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Registered = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm5,18h-2.303l-2.998-5h-2.699v5h-2V8c0-1.654,1.346-3,3-3h3c2.206,0,4,1.794,4,4,0,1.878-1.305,3.445-3.052,3.874l3.052,5.126Zm-2-9c0,1.103-.897,2-2,2h-4v-3c0-.552,.449-1,1-1h3c1.103,0,2,.897,2,2Z"/></svg>

);
