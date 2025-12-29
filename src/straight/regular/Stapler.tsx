import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Stapler = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m20.863 7.104-15.99-4.013c-1.606-.435-3.383.64-3.744 2.265l-1.125 4.6 1.996.506v4.518h13v3h-15v2h24v-8.864c0-1.904-1.291-3.554-3.137-4.012zm-16.863 3.865 7.93 2.011h-7.93zm18 7.011h-5v-4.024l5 .024zm0-6h-5.875l-13.707-3.475.654-2.674c.126-.572.752-.951 1.317-.799l15.99 4.013c.955.236 1.621 1.088 1.621 2.071v.865zm-4 4c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5z"/></svg>
);
