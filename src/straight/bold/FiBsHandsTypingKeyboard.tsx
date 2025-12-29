import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsHandsTypingKeyboard = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m24 3v12.846l-3-1.2v-11.646h-18v11.646l-3 1.2v-12.846c0-1.654 1.346-3 3-3h18c1.654 0 3 1.346 3 3zm-16 2h-3v3h3zm2 0v3h3v-3zm9 0h-4v3h4zm-9 8h4v-3h-4zm1.157 5.152c-.808-.582-1.943-.411-2.647.294l-.51.525v-6.471c0-.828-.672-1.5-1.5-1.5s-1.5.672-1.5 1.5v3.5s-5 2-5 2v6h8.505l2.909-2.801c.859-.859.773-2.305-.257-3.047zm7.842-5.652c0-.828-.672-1.5-1.5-1.5s-1.5.672-1.5 1.5v6.471l-.51-.525c-.704-.705-1.839-.876-2.647-.294-1.03.742-1.116 2.188-.257 3.047l2.909 2.801h8.505v-6l-5-2z"/></svg>
);
