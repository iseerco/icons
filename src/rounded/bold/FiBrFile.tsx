import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrFile = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  

<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
<g>
	<path d="M435.413,86.379l-51.029-51.584C362.29,12.599,332.288,0.084,300.97,0H160C95.228,0.071,42.737,52.561,42.666,117.333   v277.333C42.737,459.439,95.228,511.929,160,512h192c64.772-0.071,117.263-52.561,117.333-117.333V168.896   C469.414,137.981,457.213,108.299,435.413,86.379z M405.333,394.667C405.333,424.122,381.455,448,352,448H160   c-29.455,0-53.333-23.878-53.333-53.333V117.333C106.666,87.878,130.545,64,160,64h117.333v85.333   C277.333,172.897,296.436,192,320,192h85.333V394.667z"/>
</g>















</svg>

);
