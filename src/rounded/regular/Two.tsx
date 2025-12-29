import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Two = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M20,24H6.501c-.919,0-1.762-.502-2.198-1.311-.44-.814-.396-1.803,.113-2.579,1.232-1.877,3.602-3.06,6.11-4.312,4.085-2.04,7.944-3.965,7.422-8.681-.317-2.87-2.931-5.118-5.95-5.118-3.309,0-6,2.691-6,6,0,.552-.448,1-1,1s-1-.448-1-1C4,3.589,7.589,0,12,0c4.09,0,7.502,2.966,7.938,6.898,.675,6.102-4.422,8.646-8.517,10.69-2.261,1.128-4.396,2.194-5.332,3.62-.155,.235-.069,.45-.025,.531,.053,.097,.179,.26,.438,.26h13.499c.552,0,1,.448,1,1s-.448,1-1,1Z"/></svg>

);
