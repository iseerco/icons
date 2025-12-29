import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsComb = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m16.819 3.13-1.707 1.709 4.696 4.702-2.13 2.133-4.696-4.702-1.888 1.89 4.696 4.703-2.13 2.133-4.696-4.703-1.9 1.902 4.696 4.703-2.13 2.133-4.696-4.703-1.775 1.777c-.209.282-.209.429 0 .711l4.341 4.348-2.13 2.133-4.341-4.347c-.664-.664-1.03-1.548-1.03-2.489s.366-1.824 1.03-2.489l13.66-13.677c1.327-1.33 3.643-1.33 4.971 0l4.341 4.347-2.13 2.133-4.341-4.347c-.281-.209-.429-.209-.71 0z"/></svg>
);
