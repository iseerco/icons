import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const HalfLoading = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m11 0h2v4h-2zm0 24h2v-4h-2zm9-13v2h4v-2zm-1.588 5.884 3.458 2.009 1.004-1.729-3.458-2.009zm.479-14.757-1.729-1.005-2.01 3.458 1.729 1.005zm.537 6.709 3.455-2.014-1.008-1.728-3.455 2.014zm-4.252 10.58 2.014 3.456 1.729-1.007-2.014-3.456z"/></svg>
);
