import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsDoorOpen = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21,21V5.5c0-1.93-1.57-3.5-3.5-3.5h-1.837c-.218-.46-.538-.873-.944-1.206-.813-.667-1.871-.933-2.906-.726L5.813,1.269c-1.63,.327-2.813,1.771-2.813,3.432V21H0v3H24v-3h-3Zm-3-15.5v15.5h-2V5h1.5c.276,0,.5,.225,.5,.5Zm-12-.8c0-.237,.169-.443,.402-.49l6-1.2c.2-.037,.347,.048,.415,.104,.068,.056,.183,.181,.183,.387V21H6V4.7Zm6,7.8c0,.828-.672,1.5-1.5,1.5s-1.5-.672-1.5-1.5,.672-1.5,1.5-1.5,1.5,.672,1.5,1.5Z"/></svg>

);
