import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ShieldAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m18.573,2.126L12.339.059c-.032-.011-.177-.059-.339-.059s-.307.047-.339.059l-6.234,2.067c-2.05.68-3.427,2.587-3.427,4.746v5.171c0,6.563,7.005,10.577,9.152,11.65l.402.201c.141.07.294.105.447.105.126,0,.253-.024.373-.072l.418-.168c2.16-.869,9.207-4.281,9.207-11.717v-5.171c0-2.159-1.377-4.066-3.427-4.746ZM4,12.043v-5.171c0-1.295.826-2.439,2.056-2.848l4.944-1.639v18.956c-2.483-1.426-7-4.659-7-9.298Zm16,0c0,5.353-4.565,8.267-7,9.44V2.385l4.944,1.639c1.229.408,2.056,1.553,2.056,2.848v5.171Z"/>
</svg>

);
