import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ForwardFast = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m22,0v9.047L9.001.098v6.388L0,.057v23.888l9.001-6.429v6.388l12.999-8.95v9.047h2V0h-2Zm-.404,12.804l-10.594,7.295v-6.47l-9.001,6.429V3.943l9.001,6.429V3.902l10.581,7.284c.262.187.418.49.418.813s-.156.626-.404.804Z"/>
</svg>

);
