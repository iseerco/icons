import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Check = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  

<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
<g>
	<path d="M5.988,289.981l88.875,88.875c24.992,24.984,65.504,24.984,90.496,0l274.475-274.475c8.185-8.475,7.95-21.98-0.525-30.165   c-8.267-7.985-21.374-7.985-29.641,0L155.194,348.691c-8.331,8.328-21.835,8.328-30.165,0l-88.875-88.875   c-8.475-8.185-21.98-7.95-30.165,0.525C-1.996,268.608-1.996,281.714,5.988,289.981L5.988,289.981z"/>
</g>















</svg>

);
