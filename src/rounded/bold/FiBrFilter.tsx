import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrFilter = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m14.5 24a1.488 1.488 0 0 1 -.771-.214l-5-3a1.5 1.5 0 0 1 -.729-1.286v-5.165l-5.966-7.3a4.2 4.2 0 0 1 -1.034-2.782 4.258 4.258 0 0 1 4.253-4.253h13.494a4.254 4.254 0 0 1 3.179 7.079l-5.926 7.303v8.118a1.5 1.5 0 0 1 -1.5 1.5zm-3.5-5.35 2 1.2v-6a1.5 1.5 0 0 1 .335-.946l6.305-7.767a1.309 1.309 0 0 0 .36-.884 1.255 1.255 0 0 0 -1.253-1.253h-13.494a1.254 1.254 0 0 0 -.937 2.086l6.346 7.765a1.5 1.5 0 0 1 .338.949z"/></svg>
);
