import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Form = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m19.828 3.414-2.242-2.242a3.975 3.975 0 0 0 -2.829-1.172h-8.757a3 3 0 0 0 -3 3v21h18v-17.758a4.022 4.022 0 0 0 -1.172-2.828zm-1.414 1.414a1.923 1.923 0 0 1 .141.172h-2.555v-2.555a1.923 1.923 0 0 1 .172.141zm-13.414 17.172v-19a1 1 0 0 1 1-1h8v5h5v15zm2-6h10v-6h-10zm2-4h6v2h-6zm-2 6h10v2h-10z"/></svg>
);
