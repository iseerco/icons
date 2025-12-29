import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsGavel = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21.824,10.055l-.74,.74L13.206,2.916l.74-.74L11.824,.055,3.822,8.057l2.121,2.121,.685-.685,2.879,2.879L.036,21.843l2.121,2.121L11.628,14.493l2.879,2.879-.704,.704,2.121,2.121,8.021-8.021-2.121-2.121Zm-9.509-3.787l5.417,5.417-2.335,2.336-5.417-5.417,2.335-2.336Z"/></svg>

);
