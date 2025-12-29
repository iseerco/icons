import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const PlaneTail = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M23.382,16.622c-.456-.189-11.299-4.622-21.382-4.622H0v12H2c10.083,0,20.926-4.433,21.382-4.622l.618-.255v-2.246l-.618-.255Zm-9.382,2.378H7v-2h7v2Zm-5.559-8.511c.309-.27,.596-.568,.846-.901L15.588,1.187C16.15,.435,17.048-.013,17.987-.013h4.302l-3.443,12.909c-2.809-.871-6.483-1.837-10.405-2.408Z"/></svg>

);
