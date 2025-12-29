import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CupStraw = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m23,5h-8.493l.376-3h5.117V0h-6.883l-.627,5H1v2h1.611l1.695,14.351c.177,1.51,1.458,2.649,2.979,2.649h9.43c1.521,0,2.803-1.139,2.979-2.648l1.695-14.352h1.611v-2Zm-5.292,16.118c-.059.503-.486.882-.993.882H7.285c-.507,0-.935-.379-.993-.883l-1.667-14.117h14.75l-1.667,14.118Z"/>
</svg>

);
