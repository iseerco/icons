import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CircleV = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm5.688,8.095l-3.22,8.769c-.42,1.01-1.383,1.637-2.469,1.637s-2.048-.627-2.453-1.596l-3.235-8.81c-.19-.519.075-1.093.594-1.283.519-.191,1.093.076,1.283.594l3.22,8.769c.126.3.485.326.592.326s.465-.026.607-.367l3.204-8.728c.19-.519.765-.786,1.283-.594.519.19.784.765.594,1.283Z"/></svg>

);
