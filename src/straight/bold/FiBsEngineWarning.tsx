import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsEngineWarning = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,5a7,7,0,1,0,7,7A7,7,0,0,0,12,5Zm1.5,12h-3V14h3Zm0-5h-3V7h3ZM5.636,18.364,3.515,20.485a12.013,12.013,0,0,1,0-16.97L5.636,5.636A9.01,9.01,0,0,0,5.636,18.364Zm14.849,2.121-2.121-2.121a9.01,9.01,0,0,0,0-12.728l2.121-2.121A12.013,12.013,0,0,1,20.485,20.485Z"/></svg>

);
