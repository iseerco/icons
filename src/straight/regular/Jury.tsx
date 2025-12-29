import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Jury = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m0 24h24v-12h-24zm9-2v-8h6v8zm13 0h-5v-8h5zm-20-8h5v8h-5zm22-5.5v1.5h-2v-1.5c0-.276-.225-.5-.5-.5h-3c-.275 0-.5.224-.5.5v1.5h-4v-1.5c0-.276-.225-.5-.5-.5h-3c-.275 0-.5.224-.5.5v1.5h-4v-1.5c0-.276-.225-.5-.5-.5h-3c-.275 0-.5.224-.5.5v1.5h-2v-1.5c0-1.378 1.121-2.5 2.5-2.5h3c1.379 0 2.5 1.122 2.5 2.5 0-1.378 1.121-2.5 2.5-2.5h3c1.379 0 2.5 1.122 2.5 2.5 0-1.378 1.121-2.5 2.5-2.5h3c1.379 0 2.5 1.122 2.5 2.5zm-22.5-6c0-1.379 1.121-2.5 2.5-2.5s2.5 1.121 2.5 2.5-1.121 2.5-2.5 2.5-2.5-1.121-2.5-2.5zm8 0c0-1.381 1.119-2.5 2.5-2.5s2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5-2.5-1.119-2.5-2.5zm8 0c0-1.381 1.119-2.5 2.5-2.5s2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5-2.5-1.119-2.5-2.5z"/></svg>
);
