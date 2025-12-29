import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsWifiExclamation = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M5.64,12.64c.7-.7,1.5-1.27,2.36-1.7v3.59c-.08,.07-.16,.15-.24,.23l-2.12-2.12Zm6.36,4.36c-1.1,0-2,.9-2,2s.9,2,2,2,2-.9,2-2-.9-2-2-2ZM2.81,9.81c1.51-1.51,3.29-2.56,5.19-3.18V3.51c-2.68,.69-5.22,2.08-7.31,4.17l2.12,2.12ZM16,3.51v3.12c1.9,.61,3.69,1.67,5.19,3.18l2.12-2.12c-2.1-2.1-4.63-3.49-7.31-4.17Zm0,11.02c.08,.07,.16,.15,.24,.23l2.12-2.12c-.7-.7-1.5-1.27-2.36-1.7v3.59ZM13.5,3h-3V15h3V3Z"/></svg>

);
