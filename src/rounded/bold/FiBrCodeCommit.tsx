import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrCodeCommit = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22.5,10.5h-3.662c-.689-3.141-3.493-5.5-6.838-5.5s-6.149,2.359-6.838,5.5H1.5c-.829,0-1.5,.671-1.5,1.5s.671,1.5,1.5,1.5h3.662c.689,3.141,3.493,5.5,6.838,5.5s6.149-2.359,6.838-5.5h3.662c.828,0,1.5-.671,1.5-1.5s-.672-1.5-1.5-1.5Zm-10.5,5.5c-2.206,0-4-1.794-4-4s1.794-4,4-4,4,1.794,4,4-1.794,4-4,4Z"/></svg>

);
