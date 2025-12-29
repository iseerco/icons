import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const PersonShelter = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m13,19v5h-2v-5h2Zm11-8.992v13.992h-9v-5h2v-6.5c0-1.381-1.119-2.5-2.5-2.5h-5c-1.381,0-2.5,1.119-2.5,2.5v6.5h2v5H0v-13.992c0-.923.425-1.794,1.151-2.363L10.151.602c1.086-.85,2.611-.85,3.697,0l9,7.043c.727.569,1.151,1.44,1.151,2.363Zm-9.5-4.508c0-1.381-1.119-2.5-2.5-2.5s-2.5,1.119-2.5,2.5,1.119,2.5,2.5,2.5,2.5-1.119,2.5-2.5Zm0,6.5h-5c-.276,0-.5.224-.5.5v4.5h6v-4.5c0-.276-.224-.5-.5-.5Z"/>
</svg>

);
