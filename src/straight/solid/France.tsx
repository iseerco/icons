import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const France = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m24 4.5h-2.465l-1-1.5h-2.035l-1.5-2h-2v-1h-2.333l-2.667 2v1l-1.333 1h-.972l-1.639-1.363-1.718 2.369-4.338 1.24v2.167l1.98.66 2.275 2.1 1.906 2.542-1.015 5.132-1.146 1.185v1.722l4.225 1.207 2.635.039 3.366.961 1.495.039 1-3h1.144l3.586.988 2.377-3.022-1.828-1.873v-.71l1.009-1.123-.805-2.884-.776-.138.544-1.238h2.011l-1.145-2.031 1.162-2.768z"/></svg>
);
