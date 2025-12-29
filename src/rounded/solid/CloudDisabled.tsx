import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CloudDisabled = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m23.707 22.293a1 1 0 1 1 -1.414 1.414l-22-22a1 1 0 0 1 1.414-1.414l2.87 2.87a7.871 7.871 0 0 1 4.237-2.078 7.985 7.985 0 0 1 8.82 5.541 1.088 1.088 0 0 0 .722.735 7.96 7.96 0 0 1 5.62 8.277 7.379 7.379 0 0 1 -2.2 4.729zm-20.266-14.63a.811.811 0 0 0 -1.379.464 7.286 7.286 0 0 0 -.062.912 7.422 7.422 0 0 0 .941 3.609 5.443 5.443 0 0 0 -2.884 5.652 5.843 5.843 0 0 0 5.626 4.7h9.1a11.87 11.87 0 0 0 1.952-.158.839.839 0 0 0 .462-1.42z"/></svg>
);
