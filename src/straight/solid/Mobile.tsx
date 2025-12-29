import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Mobile = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m11.191 9a4.9 4.9 0 0 1 .252-.766l.575-1.193.538 1.192a4.953 4.953 0 0 1 .253.767zm9.809-6v21h-18v-21a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3zm-12 9h2v-1h2v1h2v-1.707a6.964 6.964 0 0 0 -.621-2.883l-.522-1.152a2 2 0 0 0 -3.7-.041l-.536 1.194a6.956 6.956 0 0 0 -.621 2.882zm4 8h-2v2h2zm3-6h-8v2h8z"/></svg>
);
