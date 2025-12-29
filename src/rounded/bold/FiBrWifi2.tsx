import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrWifi2 = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M10,19c0-1.1,.9-2,2-2s2,.9,2,2-.9,2-2,2-2-.9-2-2Zm8.36-4.24c.59-.59,.59-1.54,0-2.12-3.51-3.51-9.22-3.51-12.73,0-.59,.59-.59,1.54,0,2.12s1.54,.59,2.12,0c2.34-2.34,6.15-2.34,8.49,0,.29,.29,.68,.44,1.06,.44s.77-.15,1.06-.44Z"/></svg>

);
