import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Jury = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m0 12h24v12h-7v-10h-2v10h-6v-10h-2v10h-7zm21.5-6h-3c-1.379 0-2.5 1.122-2.5 2.5 0-1.378-1.121-2.5-2.5-2.5h-3c-1.379 0-2.5 1.122-2.5 2.5 0-1.378-1.121-2.5-2.5-2.5h-3c-1.379 0-2.5 1.122-2.5 2.5v1.5h24v-1.5c0-1.378-1.121-2.5-2.5-2.5zm-17.5-1c1.379 0 2.5-1.121 2.5-2.5s-1.121-2.5-2.5-2.5-2.5 1.121-2.5 2.5 1.121 2.5 2.5 2.5zm8 0c1.381 0 2.5-1.119 2.5-2.5s-1.119-2.5-2.5-2.5-2.5 1.119-2.5 2.5 1.119 2.5 2.5 2.5zm8 0c1.381 0 2.5-1.119 2.5-2.5s-1.119-2.5-2.5-2.5-2.5 1.119-2.5 2.5 1.119 2.5 2.5 2.5z"/></svg>
);
