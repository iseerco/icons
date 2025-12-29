import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ShieldDividedFour = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M18.574,2.17L12.315,.095c-.205-.067-.425-.067-.63,0L5.427,2.17c-2.05,.679-3.427,2.586-3.427,4.746v5.171c0,6.563,7.005,10.577,9.153,11.65,0,0,.519,.307,.85,.307s.791-.24,.791-.24c2.16-.869,9.207-4.282,9.207-11.717V6.916c0-2.16-1.377-4.067-3.426-4.746Zm1.426,4.746v4.084h-7V2.429l4.944,1.639c1.229,.408,2.056,1.552,2.056,2.848ZM6.056,4.068l4.944-1.639V11H4V6.916c0-1.296,.826-2.44,2.056-2.848Zm-1.992,8.932h6.936v8.383c-2.315-1.329-6.397-4.23-6.936-8.383Zm8.936,8.525V13h6.944c-.484,4.773-4.653,7.422-6.944,8.525Z"/>
</svg>

);
