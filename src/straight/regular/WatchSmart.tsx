import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const WatchSmart = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m18,3.172V0h-2v3h-8V0h-2v3.172c-1.164.413-2,1.524-2,2.828v12c0,1.304.836,2.415,2,2.828v3.172h2v-3h8v3h2v-3.172c1.164-.413,2-1.524,2-2.828V6c0-1.304-.836-2.415-2-2.828Zm0,14.828c0,.552-.448,1-1,1H7c-.552,0-1-.448-1-1V6c0-.552.448-1,1-1h10c.552,0,1,.448,1,1v12Zm-5-6.414l2.707,2.707-1.414,1.414-3.293-3.293v-5.414h2v4.586Z"/></svg>

);
