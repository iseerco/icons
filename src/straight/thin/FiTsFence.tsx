import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsFence = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,9v-1h-1V3.05L20,.05l-3,3v4.95h-2V3.05L12,.05l-3,3v4.95h-2V3.05L4,.05,1,3.05v4.95H0v1H1v8H0v1H1v6H7v-6h2v6h6v-6h2v6h6v-6h1v-1h-1V9h1Zm-6-5.536l2-2,2,2v4.536h-4V3.464Zm-8,0l2-2,2,2v4.536h-4V3.464Zm4,5.536v8h-4V9h4ZM2,3.464L4,1.464l2,2v4.536H2V3.464Zm0,5.536H6v8H2V9Zm4,14H2v-5H6v5Zm1-6V9h2v8h-2Zm7,6h-4v-5h4v5Zm1-6V9h2v8h-2Zm7,6h-4v-5h4v5Zm0-6h-4V9h4v8Z"/></svg>

);
