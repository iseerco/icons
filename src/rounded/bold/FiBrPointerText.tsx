import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrPointerText = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M18,22.5c0,.828-.672,1.5-1.5,1.5h-1c-1.363,0-2.597-.551-3.5-1.438-.903,.887-2.137,1.438-3.5,1.438h-1c-.828,0-1.5-.672-1.5-1.5s.672-1.5,1.5-1.5h1c1.103,0,2-.897,2-2V5c0-1.103-.897-2-2-2h-1c-.828,0-1.5-.672-1.5-1.5s.672-1.5,1.5-1.5h1c1.363,0,2.597,.551,3.5,1.438,.903-.887,2.137-1.438,3.5-1.438h1c.828,0,1.5,.672,1.5,1.5s-.672,1.5-1.5,1.5h-1c-1.103,0-2,.897-2,2v14c0,1.103,.897,2,2,2h1c.828,0,1.5,.672,1.5,1.5Z"/>
</svg>

);
