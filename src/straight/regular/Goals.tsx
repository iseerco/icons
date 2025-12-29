import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Goals = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m6 2.5c0-1.381 1.119-2.5 2.5-2.5s2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5-2.5-1.119-2.5-2.5zm11 9.5h2v-6l5-3-5-3s0 0 0 0-2 0-2 0v6zm7 2v10h-2v-8h-5v8h-2v-4h-5v4h-10v-2h8v-4h1v-2.277l-3.171-1.047-1.108 3.324h-4.721v-2h3.279l.688-2.064c-.828-.586-1.253-1.635-.988-2.661l.897-3.35c.234-1.095 1.262-1.925 2.432-1.925h1.135s3.812 0 3.812 0l3.744-1.943v2.254l-3.256 1.689h-2.02l-1.428 5.384 2.704.893v3.723h4v-4h9zm-18.757-1.625 1.15.38 1.261-4.755h-1.346c-.234 0-.439.166-.489.394l-.907 3.39c-.063.246.081.51.33.592z"/></svg>
);
