import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const StarOctogram = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  

<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
<g id="XMLID_1_">
	<g>
		<path d="M512,256l-74.99,74.99v106.02H330.99L256,512l-74.99-74.99H74.99V330.99L0,256l74.99-74.99V74.99h106.02L256,0    l74.99,74.99h106.02v106.02L512,256z M406.85,300.78l44.8-44.8l-44.8-44.8l-12.5-12.48v-81.07h-81.07l-12.48-12.5L256,60.33v0.02    l-57.3,57.3h-81.07v81.07l-12.5,12.48L60.33,256l44.82,44.8l12.5,12.46v81.07h81.07l12.48,12.5l44.8,44.8l44.8-44.8l12.48-12.5    h81.07v-81.07L406.85,300.78z"/>
	</g>
</g>
</svg>

);
