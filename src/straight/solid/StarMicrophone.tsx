import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const StarMicrophone = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m23.998 17.364-3.054 2.083 1.271 3.982-.818.571-3.382-2.338-3.331 2.338-.787-.593 1.181-4.022-3.079-2.016v-1.006h4.2l1.285-4.363h1.059l1.283 4.363h4.174v1h-.002zm-11.774 4.643h-1.224c-4.968-.006-8.994-4.032-9-9h-2c.007 6.072 4.928 10.986 11 10.994h.637zm-3.224-9h-3.929c.4 2.789 2.396 4.949 4.928 5.707v-4.351h4.704l1.285-4.363h3.012v-1.994h-4v-2.006h3.929c-.501-3.493-3.429-6-6.929-6-3.444 0-6.464 2.585-6.929 6h3.929v2.006h-4v2.994h4v2.006z"/></svg>
);
