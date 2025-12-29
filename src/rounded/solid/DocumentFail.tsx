import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const DocumentFail = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m24 19-2 2-2-2v-14c0-1.105.895-2 2-2 1.105 0 2 .895 2 2zm-12-16.414v4.414h4.414zm-12 11.31v-8.896c0-1.657 1.343-3 3-3h7v7h7v4.898l-1.906-1.894-3.297 3.291-3.297-3.296-3.297 3.294-3.295-3.294-1.908 1.896zm17 2.821v5.283h-17v-5.285l1.904-1.891 3.299 3.298 3.297-3.294 3.297 3.294 3.301-3.295z"/></svg>
);
