import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const UrbanPlanning = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m15 .586v4.414h4.414zm-9 14.414h2v2h-2zm0-4h2v2h-2zm6 4v2h-2v-2zm8-8v3.26c-.637.216-1.239.561-1.746 1.068l-4.254 4.253v-1.082c0-1.5-1.5-1.5-1.5-1.5h-2.5v-2.5c0-.828-.672-1.5-1.5-1.5h-3c-.828 0-1.5.672-1.5 1.5v8.5h6v5h-10v-20.999c0-1.657 1.343-3 3-3h10v7zm3.256 5.742c-.99-.99-2.599-.99-3.589 0l-7.668 7.667v3.59h3.59l7.666-7.667c.479-.48.744-.833.744-1.795 0-.678-.264-1.316-.744-1.795z"/></svg>
);
