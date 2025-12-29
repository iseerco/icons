import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const WatchCalculator = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m18,3.172V0h-2v3h-8V0h-2v3.172c-1.164.413-2,1.524-2,2.828v12c0,1.304.836,2.415,2,2.828v3.172h2v-3h8v3h2v-3.172c1.164-.413,2-1.524,2-2.828V6c0-1.304-.836-2.415-2-2.828Zm0,14.828c0,.551-.448,1-1,1H7c-.552,0-1-.449-1-1V6c0-.551.448-1,1-1h10c.552,0,1,.449,1,1v12Zm-10-7h2v2h-2v-2Zm3,0h2v2h-2v-2Zm3,0h2v2h-2v-2Zm-6,4h2v2h-2v-2Zm3,0h2v2h-2v-2Zm3,0h2v2h-2v-2Zm-6-8h8v2h-8v-2Z"/></svg>

);
