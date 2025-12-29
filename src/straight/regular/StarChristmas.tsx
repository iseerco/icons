import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const StarChristmas = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m17.185,14.822l6.854-2.822-6.854-2.822,4.815-7.178-7.178,4.815L12-.038l-2.798,6.796L2,2l4.758,7.202L-.039,12l6.854,2.822-4.815,7.178,7.178-4.815,2.822,6.853,2.822-6.853,7.178,4.815-4.815-7.178Zm-7.165-.843l-4.806-1.979,4.806-1.979,1.979-4.806,1.979,4.806,4.806,1.979-4.806,1.979-1.979,4.806-1.979-4.806Z"/></svg>

);
