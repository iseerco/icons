import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsExamD = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m8.5 12h-2.5v8h2.5c1.378 0 2.5-1.122 2.5-2.5v-3c0-1.378-1.122-2.5-2.5-2.5zm1.5 5.5c0 .827-.673 1.5-1.5 1.5h-1.5v-6h1.5c.827 0 1.5.673 1.5 1.5zm4.707-17.5h-10.207c-1.378 0-2.5 1.122-2.5 2.5v21.5h20v-16.707zm.293 1.707 5.293 5.293h-5.293zm-12 21.293v-20.5c0-.827.673-1.5 1.5-1.5h9.5v7h7v15zm13-8h2v1h-2v2h-1v-2h-2v-1h2v-2h1z"/></svg>
);
