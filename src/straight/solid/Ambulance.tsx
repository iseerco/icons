import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Ambulance = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m22.761 11h-6.761v-7h1.05a4.007 4.007 0 0 1 3.656 2.375zm1.239 4.062v3.938h-24v-12a3 3 0 0 1 3-3h7l.757-3.03a1.281 1.281 0 0 1 2.486 0l.757 3.03v9h9.627a5.952 5.952 0 0 1 .373 2.062zm-14-4.062h-2v-2h-2v2h-2v2h2v2h2v-2h2zm-6.942 10a2.424 2.424 0 0 0 -.058.5 2.5 2.5 0 0 0 5 0 2.424 2.424 0 0 0 -.058-.5zm14 0a2.424 2.424 0 0 0 -.058.5 2.5 2.5 0 0 0 5 0 2.424 2.424 0 0 0 -.058-.5z"/></svg>
);
