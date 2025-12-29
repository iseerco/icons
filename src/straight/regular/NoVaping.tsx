import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const NoVaping = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m17.5 11c-3.584 0-6.5 2.916-6.5 6.5s2.916 6.5 6.5 6.5 6.5-2.916 6.5-6.5-2.916-6.5-6.5-6.5zm4.5 6.5c0 .879-.263 1.693-.7 2.386l-6.186-6.186c.693-.437 1.508-.7 2.386-.7 2.481 0 4.5 2.019 4.5 4.5zm-9 0c0-.879.263-1.693.7-2.386l6.186 6.186c-.693.437-1.508.7-2.386.7-2.481 0-4.5-2.019-4.5-4.5zm-2.702 4.5h-8.298v-13h11c.474 0 .853.338.956.782.603-.277 1.241-.49 1.91-.621-.366-1.244-1.505-2.161-2.866-2.161h-5v-5h-3v-2h-2v2h-3v22h12.028c-.677-.57-1.258-1.247-1.73-2zm-8.298-18h4v3h-4z"/></svg>
);
