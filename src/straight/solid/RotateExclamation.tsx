import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const RotateExclamation = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m2,12H0C0,5.383,5.383,0,12,0c2.98,0,5.822,1.11,8,3.057V0h2v5c0,1.103-.897,2-2,2h-5v-2h4.141c-1.866-1.901-4.435-3-7.141-3C6.486,2,2,6.486,2,12Zm20,0c0,5.514-4.486,10-10,10-2.706,0-5.275-1.099-7.141-3h4.141v-2h-5c-1.103,0-2,.897-2,2v5h2v-3.057c2.178,1.946,5.02,3.057,8,3.057,6.617,0,12-5.383,12-12h-2Zm-9-7h-2v10h2V5Zm-2,14h2v-2h-2v2Z"/></svg>

);
