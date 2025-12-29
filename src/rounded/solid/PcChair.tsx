import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const PcChair = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m12.069 11c-2.359.02-4.735.328-7.069.898v-8.898c0-1.654 1.346-3 3-3h8c1.654 0 3 1.346 3 3v8.877c-2.278-.563-4.597-.871-6.931-.877zm11.931-4v7.649c-1.192.469-4.099 2.002-11 2.332v3.018h3c1.654 0 3 1.346 3 3v1h-2v-1c0-.552-.448-1-1-1h-3v2h-2v-2h-3c-.551 0-1 .448-1 1v1h-2v-1c0-1.654 1.346-3 3-3h3v-3.018c-6.911-.332-9.798-1.861-11-2.332v-7.649h2v6.318c.475.174 1.245.423 2.221.677 2.586-.638 5.211-1.003 7.857-.996 2.598.007 5.177.368 7.715.992.97-.253 1.734-.501 2.208-.674v-6.317h2z"/></svg>
);
