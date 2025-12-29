import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const PhotoVideo = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,22H6V10h-2v2H2v-2H0v14H2v-2h2v2H14v-2h2v2h2v-8h-6v6ZM4,14v2H2v-2h2Zm-2,6v-2h2v2H2Zm14-2v2h-2v-2h2ZM11,4.5c0-.828,.672-1.5,1.5-1.5s1.5,.672,1.5,1.5-.672,1.5-1.5,1.5-1.5-.672-1.5-1.5ZM21,0H11c-1.654,0-3,1.346-3,3V14H24V3c0-1.654-1.346-3-3-3ZM11,2h10c.551,0,1,.449,1,1v.586l-4,4-1.948-1.948-6.052,5.188V3c0-.551,.449-1,1-1Zm.703,10l4.244-3.638,2.052,2.052,4-4v5.586H11.703Z"/></svg>

);
