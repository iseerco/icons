import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsWhiteSpace = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M24,0V24h-1V11.991c-.003,.38-.147,.76-.437,1.049l-3.535,3.535-.707-.707,3.368-3.368H2.311l3.368,3.368-.707,.707-3.535-3.535c-.29-.29-.434-.669-.437-1.049v12.009H0V0H1V11.968c.003-.38,.147-.76,.437-1.049l3.535-3.536,.707,.707-3.409,3.41H21.731l-3.409-3.41,.707-.707,3.535,3.536c.29,.29,.434,.669,.437,1.049V0h1Z"/>
</svg>

);
