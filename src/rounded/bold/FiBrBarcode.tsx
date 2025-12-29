import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrBarcode = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M1.5,22c-.828,0-1.5-.671-1.5-1.5V3.5c0-.829,.672-1.5,1.5-1.5s1.5,.671,1.5,1.5V20.5c0,.829-.672,1.5-1.5,1.5Zm11.5-1.5V3.5c0-.829-.672-1.5-1.5-1.5s-1.5,.671-1.5,1.5V20.5c0,.829,.672,1.5,1.5,1.5s1.5-.671,1.5-1.5Zm-4-.5V4c0-1.104-.896-2-2-2s-2,.896-2,2V20c0,1.104,.896,2,2,2s2-.896,2-2Zm10,0V4c0-1.104-.896-2-2-2s-2,.896-2,2V20c0,1.104,.896,2,2,2s2-.896,2-2Zm5,.5V3.5c0-.829-.672-1.5-1.5-1.5s-1.5,.671-1.5,1.5V20.5c0,.829,.672,1.5,1.5,1.5s1.5-.671,1.5-1.5Z"/></svg>

);
