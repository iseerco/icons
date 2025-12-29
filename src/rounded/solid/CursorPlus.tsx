import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CursorPlus = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m16 8a8 8 0 1 0 8 8 8.009 8.009 0 0 0 -8-8zm3 9h-2v2a1 1 0 0 1 -2 0v-2h-2a1 1 0 0 1 0-2h2v-2a1 1 0 0 1 2 0v2h2a1 1 0 0 1 0 2zm-14-5h-.019a1 1 0 0 1 -.891-.586l-3.944-8.675a2.011 2.011 0 0 1 .442-2.151 1.99 1.99 0 0 1 2.061-.479.893.893 0 0 1 .09.037l8.675 3.944a1 1 0 0 1 .033 1.8l-3.7 1.85-1.85 3.7a1 1 0 0 1 -.897.56z"/></svg>
);
