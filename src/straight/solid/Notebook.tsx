import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Notebook = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m19 2v-2h-2v2h-2v-2h-2v2h-2v-2h-2v2h-2v-2h-2v2h-2v19a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-19zm-6 15h-6v-2h6zm4-4h-10v-2h10zm0-4h-10v-2h10z"/></svg>
);
