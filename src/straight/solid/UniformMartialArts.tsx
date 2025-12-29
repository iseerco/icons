import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const UniformMartialArts = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M15.416,0l-3.391,6.028L8.58,0h6.835ZM3,7h2V15h1.978l3.904-6.941L6.366,.156c-1.952,.347-3.589,1.239-4.704,2.022-1.041,.732-1.662,1.945-1.662,3.246v15.576H3V7ZM22.338,2.178c-1.117-.784-2.758-1.679-4.715-2.024L9.272,15h9.728V7h2v14h3V5.424c0-1.301-.621-2.514-1.662-3.246ZM5,17v7h14v-7h-4.975c.511,.835,.975,1.889,.975,3h-2c0-.83-.51-1.753-1-2.436-.49,.683-1,1.607-1,2.436h-2c0-1.111,.464-2.165,.975-3H5Z"/></svg>

);
