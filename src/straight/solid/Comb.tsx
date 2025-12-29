import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Comb = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m18.289 2.282 4.302 4.302 1.409-1.409-4.302-4.302c-1.165-1.164-3.06-1.163-4.224 0l-14.601 14.601c-1.164 1.164-1.164 3.059 0 4.224l4.302 4.302 1.409-1.409-4.302-4.302c-.387-.387-.387-1.018 0-1.405l.85-.85 4.993 4.993 1.409-1.409-4.993-4.993 1.456-1.456 4.993 4.993 1.409-1.409-4.993-4.993 1.516-1.516 4.993 4.993 1.409-1.409-4.993-4.993 1.529-1.529 4.993 4.993 1.409-1.409-4.993-4.993 1.456-1.456 4.993 4.993 1.409-1.409-4.993-4.993.748-.748c.387-.387 1.018-.387 1.406 0z"/></svg>
);
