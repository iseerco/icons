import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Surfing = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m23.124.876a2.958 2.958 0 0 0 -2.4-.861c-2.272.221-8.014 1.2-12.263 5.446a34.757 34.757 0 0 0 -8.224 13.077l-.237.608 1.72 1.72 13.866-13.866 1.414 1.414-13.866 13.866 1.72 1.72.609-.238a34.746 34.746 0 0 0 13.076-8.223c4.248-4.248 5.225-9.991 5.446-12.263a2.971 2.971 0 0 0 -.861-2.4z"/></svg>
);
