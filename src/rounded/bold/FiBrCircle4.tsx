import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrCircle4 = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm0,21c-4.963,0-9-4.037-9-9S7.037,3,12,3s9,4.037,9,9-4.037,9-9,9Zm4-13.5v9c0,.828-.672,1.5-1.5,1.5s-1.5-.672-1.5-1.5v-2.5h-2.5c-1.93,0-3.5-1.57-3.5-3.5v-3c0-.828,.672-1.5,1.5-1.5s1.5,.672,1.5,1.5v3c0,.275,.225,.5,.5,.5h2.5v-3.5c0-.828,.672-1.5,1.5-1.5s1.5,.672,1.5,1.5Z"/></svg>

);
