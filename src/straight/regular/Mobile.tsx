import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Mobile = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m18 0h-12a3 3 0 0 0 -3 3v21h18v-21a3 3 0 0 0 -3-3zm1 22h-6v-2h-2v2h-6v-19a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm-8-11h2v1h2v-1.707a6.964 6.964 0 0 0 -.621-2.883l-.522-1.152a2 2 0 0 0 -3.7-.041l-.536 1.194a6.956 6.956 0 0 0 -.621 2.882v1.707h2zm1.018-3.959.538 1.192a4.953 4.953 0 0 1 .253.767h-1.618a4.9 4.9 0 0 1 .252-.766zm-4.018 6.959h8v2h-8z"/></svg>
);
