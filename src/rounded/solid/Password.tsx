import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Password = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m15 17a1 1 0 0 1 -1 1h-4a1 1 0 0 1 0-2h4a1 1 0 0 1 1 1zm-.293-9.707a1 1 0 0 0 -1.414 0l-1.293 1.293-1.293-1.293a1 1 0 1 0 -1.414 1.414l1.293 1.293-1.293 1.293a1 1 0 1 0 1.414 1.414l1.293-1.293 1.293 1.293a1 1 0 0 0 1.414-1.414l-1.293-1.293 1.293-1.293a1 1 0 0 0 0-1.414zm7.293 8.707h-4a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2zm-.586-6 1.293-1.293a1 1 0 1 0 -1.414-1.414l-1.293 1.293-1.293-1.293a1 1 0 1 0 -1.414 1.414l1.293 1.293-1.293 1.293a1 1 0 1 0 1.414 1.414l1.293-1.293 1.293 1.293a1 1 0 0 0 1.414-1.414zm-15.414 6h-4a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2zm.707-8.707a1 1 0 0 0 -1.414 0l-1.293 1.293-1.293-1.293a1 1 0 1 0 -1.414 1.414l1.293 1.293-1.293 1.293a1 1 0 1 0 1.414 1.414l1.293-1.293 1.293 1.293a1 1 0 1 0 1.414-1.414l-1.293-1.293 1.293-1.293a1 1 0 0 0 0-1.414z"/></svg>
);
