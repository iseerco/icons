import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const BowlSoftServe = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m3.094,16h17.801l-.398,1.014c-1.633,2.725-3.929,3.006-6.409,3.006-.321,0-.762-.005-1.088-.01v1.99h4v2H7v-2h4v-1.99c-2.848.042-5.652.081-7.497-2.996l-.41-1.014Zm18.406-7h-4.5v-2h2c1.105,0,2-.895,2-2s-.895-2-2-2h-3.145c-.487-1.868-2.169-3-3.855-3,0,1.5-.25,2.25-1,3h-6c-1.105,0-2,.895-2,2s.895,2,2,2h8v2H2.5c-1.381,0-2.5,1.119-2.5,2.5s1.119,2.5,2.5,2.5h19c1.381,0,2.5-1.119,2.5-2.5s-1.119-2.5-2.5-2.5Z"/>
</svg>

);
