import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsSuperscript = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m24,0v11h-3v-6.44l-1.879-1.836,2.661-2.724h2.218Zm-9.921,6l-4.74,6.463-4.74-6.463H.879l6.6,9L.879,24h3.721l4.74-6.463,4.74,6.463h3.721l-6.6-9,6.6-9h-3.721Z"/></svg>

);
