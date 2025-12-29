import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrScale = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m18.5 2h-2.025a5.917 5.917 0 0 0 -5.661-1.885 5.762 5.762 0 0 0 -3.214 1.885h-2.6c-2.9 0-5 2.313-5 5.5v11a5.507 5.507 0 0 0 5.5 5.5h13a5.507 5.507 0 0 0 5.5-5.5v-11a5.507 5.507 0 0 0 -5.5-5.5zm2.5 16.5a2.5 2.5 0 0 1 -2.5 2.5h-13a2.5 2.5 0 0 1 -2.5-2.5v-11c0-.417.1-2.5 2-2.5h1.135a6.49 6.49 0 0 0 -.122 1.214 2.784 2.784 0 0 0 2.7 2.778l2.536-4.323a1.5 1.5 0 1 1 2.5 1.664l-1.433 2.667h2.912a2.7 2.7 0 0 0 2.785-3c0 .016-.037-.663-.092-1h.579a2.5 2.5 0 0 1 2.5 2.5z"/></svg>
);
