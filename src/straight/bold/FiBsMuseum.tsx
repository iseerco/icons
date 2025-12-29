import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsMuseum = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m24 12.001v-3.85c0-1.281-.699-2.459-1.824-3.072l-8.542-4.66c-1.023-.559-2.244-.559-3.266 0l-8.544 4.66c-1.125.613-1.824 1.791-1.824 3.072v3.85h3v8.999h-3v3h24v-3h-3v-8.999zm-21-3.85c0-.183.1-.352.261-.439l8.545-4.66c.122-.066.268-.065.39 0l8.543 4.66c.161.088.261.257.261.439v.851h-18zm10 3.85v8.999h-2v-8.999zm-7 0h2v8.999h-2zm12 8.999h-2v-8.999h2zm-4.5-14.499c0 .828-.672 1.5-1.5 1.5s-1.5-.672-1.5-1.5.672-1.5 1.5-1.5 1.5.672 1.5 1.5z"/></svg>
);
