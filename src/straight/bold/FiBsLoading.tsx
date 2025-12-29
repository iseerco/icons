import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsLoading = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m13.5 4h-3v-4h3zm0 16h-3v4h3zm-9.5-9.5h-4v3h4zm20 0h-4v3h4zm-.874 6.232-3.458-2.009-1.508 2.593 3.458 2.01zm-3.8-14.354-2.597-1.508-2.009 3.459 2.593 1.508zm3.811 4.876-1.51-2.592-3.458 2.014 1.51 2.592zm-3.787 14.359-2.014-3.456-2.592 1.51 2.014 3.456zm-13.494-4.3-1.507-2.59-3.459 2.009 1.51 2.594zm3.444-12.984-2.013-3.459-2.594 1.508 2.007 3.459zm-3.452 2.347-3.456-2.014-1.51 2.592 3.456 2.014zm3.424 12.992-2.591-1.512-2.015 3.456 2.592 1.512z"/></svg>
);
