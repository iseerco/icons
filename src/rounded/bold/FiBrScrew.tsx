import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrScrew = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m15.879,0h-7.759c-1.171,0-2.121.949-2.121,2.121,0,.563.224,1.103.622,1.501l1.378,1.375v13.346c0,1.469.572,2.85,1.611,3.889l1.329,1.329c.293.293.677.439,1.061.439s.768-.146,1.061-.439l1.329-1.329c1.039-1.039,1.611-2.419,1.611-3.889V5.022l1.387-1.403c.393-.397.613-.933.613-1.491v-.008c0-1.171-.949-2.121-2.121-2.121Zm-2.879,18.343c0,.658-.267,1.302-.732,1.768l-.268.268-.268-.268c-.465-.465-.732-1.109-.732-1.768v-.782l2-2v2.782Zm0-5.61l-2,2v-2.819l2-2v2.819Zm0-5.647l-2,2v-4.076l2,.006v2.07Z"/>
</svg>

);
