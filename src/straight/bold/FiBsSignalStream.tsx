import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsSignalStream = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,10c1.1,0,2,.9,2,2s-.9,2-2,2-2-.9-2-2,.9-2,2-2Zm-2.83,4.83c-1.56-1.56-1.56-4.1,0-5.66l-2.12-2.12c-2.73,2.73-2.73,7.17,0,9.9l2.12-2.12Zm9.83-2.83c0-1.87-.73-3.63-2.05-4.95l-2.12,2.12c.76,.76,1.17,1.76,1.17,2.83s-.42,2.07-1.17,2.83l2.12,2.12c1.32-1.32,2.05-3.08,2.05-4.95Zm-13.36,6.36c-3.51-3.51-3.51-9.22,0-12.73L3.51,3.51C-1.16,8.19-1.16,15.81,3.51,20.49l2.12-2.12ZM20.49,3.51l-2.12,2.12c3.51,3.51,3.51,9.22,0,12.73l2.12,2.12c4.68-4.68,4.68-12.29,0-16.97Z"/></svg>

);
