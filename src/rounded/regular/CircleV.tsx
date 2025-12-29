import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CircleV = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m17.727,8.114l-3.22,8.769c-.42,1.01-1.383,1.637-2.469,1.637s-2.048-.627-2.453-1.596l-3.235-8.81c-.19-.519.075-1.093.594-1.283s1.093.076,1.283.594l3.22,8.769c.126.3.485.326.592.326s.465-.026.607-.367l3.204-8.728c.19-.519.766-.786,1.283-.594.519.19.784.765.594,1.283Zm6.312,3.905c0,6.617-5.383,12-12,12S.039,18.637.039,12.02,5.422.02,12.039.02s12,5.383,12,12Zm-2,0c0-5.514-4.486-10-10-10S2.039,6.506,2.039,12.02s4.486,10,10,10,10-4.486,10-10Z"/></svg>

);
