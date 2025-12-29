import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Infinity = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m18 6c-2.972 0-4.943 2.227-6 3.882-1.057-1.655-3.028-3.882-6-3.882a6 6 0 0 0 0 12c2.972 0 4.943-2.227 6-3.882 1.057 1.655 3.028 3.882 6 3.882a6 6 0 0 0 0-12zm-12 10a4 4 0 0 1 0-8c2.693 0 4.382 2.945 4.9 4-.514 1.06-2.192 4-4.9 4zm12 0c-2.693 0-4.382-2.945-4.9-4 .515-1.058 2.193-4 4.9-4a4 4 0 0 1 0 8z"/></svg>
);
