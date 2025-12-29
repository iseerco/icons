import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Comment = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m22.048 6.313c-.687-2.045-2.317-3.675-4.361-4.361-3.774-1.266-7.601-1.266-11.374 0-2.045.686-3.675 2.316-4.361 4.36-1.266 3.774-1.266 7.6 0 11.374.686 2.044 2.316 3.675 4.361 4.361 1.884.632 3.797.952 5.687.952 3.022 0 6.084-.398 9.101-1.183.351-.091.625-.365.716-.716.785-3.017 1.183-6.079 1.183-9.101 0-1.889-.32-3.802-.952-5.687z" opacity=".5"/><path d="m17.064 13h-10.128c-.552 0-1-.448-1-1s.448-1 1-1h10.128c.552 0 1 .448 1 1s-.448 1-1 1z"/><path d="m16.064 17.021h-8.128c-.552 0-1-.448-1-1s.448-1 1-1h8.128c.552 0 1 .448 1 1s-.448 1-1 1z"/><path d="m10.84 8.979h-2.904c-.552 0-1-.448-1-1s.448-1 1-1h2.904c.552 0 1 .448 1 1s-.448 1-1 1z"/></svg>
);
