import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsMousePointerClick = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m13 5h-3v-5h3zm-11.118 4.519.474 2.962 4.938-.79-.474-2.962zm1.263-4.783 3.904 3.124 1.874-2.343-3.904-3.124zm16.667-.073-1.895-2.326-3.876 3.158 1.895 2.326zm-1.87 13.167 2.213 4.363-3.623 1.812-2.299-4.471-4.233 3.87v-13.279c0-.458.153-.913.43-1.279.695-.915 2.033-1.118 2.923-.444l10.229 8.829zm-1.56-2.852-3.383-2.921v4.54l1.559-1.424 1.825-.194z"/></svg>
);
