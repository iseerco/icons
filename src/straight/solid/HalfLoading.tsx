import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const HalfLoading = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m13 4h-2v-4h2zm0 16h-2v4h2zm11-9h-4v2h4zm-1.126 6.164-3.458-2.009-1.004 1.729 3.458 2.009zm-3.983-15.037-1.729-1.005-2.01 3.458 1.729 1.005zm3.992 4.695-1.008-1.728-3.455 2.014 1.008 1.728zm-3.965 15.043-2.014-3.456-1.729 1.007 2.014 3.456z"/></svg>
);
