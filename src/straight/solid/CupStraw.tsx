import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CupStraw = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m23,5h-8.493l.376-3h5.117V0h-6.883l-.627,5H1v2h1.611l1.695,14.351c.177,1.51,1.458,2.649,2.979,2.649h9.43c1.521,0,2.803-1.139,2.979-2.648l1.695-14.352h1.611v-2Z"/>
</svg>

);
