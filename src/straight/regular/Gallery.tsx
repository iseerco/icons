import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Gallery = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m24 3a3 3 0 0 0 -3-3h-10a3 3 0 0 0 -3 3v2h-1a3 3 0 0 0 -3 3v2h-1a3 3 0 0 0 -3 3v11h16v-5h4v-5h4zm-21 9h10a1 1 0 0 1 1 1v.586l-4 4-1.947-1.948-6.053 5.188v-7.826a1 1 0 0 1 1-1zm11 10h-10.3l4.244-3.638 2.056 2.052 4-4zm4-5h-2v-4a3 3 0 0 0 -3-3h-7v-2a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1zm4-5h-2v-4a3 3 0 0 0 -3-3h-7v-2a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1zm-18 3a1 1 0 1 1 1 1 1 1 0 0 1 -1-1z"/></svg>
);
