import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Comb = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m16.883 2.282-.748.748 4.993 4.993-1.409 1.409-4.993-4.993-1.456 1.456 4.993 4.993-1.409 1.409-4.993-4.993-1.529 1.529 4.993 4.993-1.409 1.409-4.993-4.993-1.516 1.516 4.993 4.993-1.409 1.409-4.993-4.993-1.456 1.456 4.993 4.993-1.409 1.409-4.993-4.993-.85.85c-.387.387-.387 1.018 0 1.405l4.302 4.302-1.409 1.409-4.303-4.3c-1.164-1.164-1.164-3.059 0-4.224l14.601-14.601c1.164-1.164 3.059-1.164 4.224 0l4.302 4.302-1.409 1.409-4.302-4.302c-.387-.387-1.018-.387-1.406 0z"/></svg>
);
