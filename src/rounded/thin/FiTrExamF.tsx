import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrExamF = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m14.707 0h-10.207c-1.378 0-2.5 1.122-2.5 2.5v21.5h20v-16.707zm.293 1.707 5.293 5.293h-5.293zm-12 21.293v-20.5c0-.827.673-1.5 1.5-1.5h9.5v7h7v15zm15-7v1h-5v-1zm-12-4h5v1h-4v3h4v1h-4v3h-1z"/></svg>
);
