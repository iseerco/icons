import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrCookie = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  

<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
<g>
	<circle cx="205.099" cy="205.077" r="42.667"/>
	<circle cx="426.667" cy="43.136" r="42.667"/>
	<circle cx="256" cy="341.803" r="42.667"/>
	<path d="M510.763,231.531c-1.445-15.283-13.54-27.386-28.821-28.843c-91.428-8.852-163.779-81.221-172.608-172.651   c-1.453-15.267-13.534-27.357-28.8-28.821C272.448,0.469,264.299,0,256,0C114.615,0,0,114.615,0,256s114.615,256,256,256   s256-114.615,256-256l0,0C512,247.723,511.552,239.573,510.763,231.531z M256,448c-106.039,1.708-193.385-82.868-195.093-188.907   C59.198,153.055,143.775,65.708,249.813,64c0,0,0,0,0,0c20.878,99.535,98.65,177.298,198.187,198.165   C444.572,365.745,359.636,447.953,256,448z"/>
</g>















</svg>

);
