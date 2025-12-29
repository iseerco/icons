import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Archive = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  

<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
<g>
	<path d="M362.667,0H149.333C90.423,0,42.667,47.756,42.667,106.667v128h426.667v-128C469.333,47.756,421.577,0,362.667,0z    M277.333,149.333h-42.667c-11.782,0-21.333-9.551-21.333-21.333s9.551-21.333,21.333-21.333h42.667   c11.782,0,21.333,9.551,21.333,21.333S289.115,149.333,277.333,149.333z"/>
	<path d="M42.667,405.333C42.667,464.244,90.423,512,149.333,512h213.333c58.91,0,106.667-47.756,106.667-106.667v-128H42.667   V405.333z M234.667,362.667h42.667c11.782,0,21.333,9.551,21.333,21.333c0,11.782-9.551,21.333-21.333,21.333h-42.667   c-11.782,0-21.333-9.551-21.333-21.333C213.333,372.218,222.885,362.667,234.667,362.667z"/>
</g>















</svg>

);
