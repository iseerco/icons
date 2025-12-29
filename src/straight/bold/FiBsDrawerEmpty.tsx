import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsDrawerEmpty = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M21.816,2.724c-.365-1.604-1.769-2.724-3.413-2.724H5.597c-1.645,0-3.049,1.12-3.414,2.724L.037,12.167l-.037,11.833H24V12.5l-2.184-9.776Zm-3.816,2.276H5.972l.016-2h12.012v2Zm-12.422,3h12.872l.675,3H4.885l.692-3Zm-2.578,13v-7H21v7H3Zm6-5h6v3h-6v-3Z"/>
</svg>

);
