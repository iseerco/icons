import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Circle7 = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,24C5.383,24,0,18.617,0,12S5.383,0,12,0s12,5.383,12,12-5.383,12-12,12Zm0-22C6.486,2,2,6.486,2,12s4.486,10,10,10,10-4.486,10-10S17.514,2,12,2Zm-1.132,15.497l4.921-8.603c.312-.625,.279-1.352-.088-1.946-.367-.594-1.003-.948-1.701-.948h-5c-.552,0-1,.447-1,1s.448,1,1,1l5.026-.05-4.895,8.553c-.274,.479-.108,1.091,.372,1.365,.157,.09,.327,.132,.496,.132,.347,0,.684-.181,.869-.503Z"/></svg>

);
