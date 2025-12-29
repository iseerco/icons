import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const MenSwimsuit = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m0 3v8.392l8.247 8.897c.417.189 1.257.673 3.753.711 2.498-.039 3.333-.521 3.753-.711l8.247-8.897v-8.392zm2 2h4v5.173c-1.165-.625-2.51-1.01-4-1.13v-4.044zm.47 6.115c3.548.534 5.866 3.036 6.379 6.882zm9.53 7.885c-.404 0-.75-.025-1.064-.058-.144-3.055-1.188-5.552-2.936-7.279v-6.663h8v6.663c-1.748 1.728-2.792 4.224-2.936 7.279-.314.033-.66.058-1.064.058zm3.151-1.003c.513-3.846 2.831-6.348 6.379-6.882zm6.849-8.953c-1.49.12-2.835.504-4 1.13v-5.173h4v4.044z"/></svg>
);
