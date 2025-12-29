import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ClockSeven = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm1,12c0,.176-.046,.348-.134,.5l-2,3.464c-.186,.321-.521,.5-.867,.5-.169,0-.342-.043-.499-.134-.479-.276-.642-.888-.366-1.366l1.866-3.232V6c0-.552,.448-1,1-1s1,.448,1,1v6Z"/></svg>

);
