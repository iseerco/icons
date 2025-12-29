import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsWifi2 = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,21c-1.1,0-2-.9-2-2s.9-2,2-2,2,.9,2,2-.9,2-2,2Zm0-3c-.55,0-1,.45-1,1s.45,1,1,1,1-.45,1-1-.45-1-1-1Zm6.36-5.36c-1.7-1.7-3.96-2.64-6.36-2.64s-4.66,.94-6.36,2.64l.71,.71c1.51-1.51,3.52-2.34,5.66-2.34s4.15,.83,5.66,2.34l.71-.71Z"/></svg>

);
