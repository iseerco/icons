import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const SortDown = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,18c-.756,0-1.479-.322-1.985-.886L3.584,10.587c-.602-.658-.746-1.536-.401-2.318s1.09-1.269,1.944-1.269h13.746c.854,0,1.6,.486,1.944,1.269s.2,1.66-.376,2.291l-6.487,6.589c-.475,.529-1.198,.852-1.954,.852ZM5.127,9c-.026,0-.081,0-.114,.074-.033,.075,.004,.116,.022,.136l6.437,6.534c.204,.227,.417,.256,.528,.256s.324-.029,.497-.222l6.493-6.596s.058,.03-.003-.108c-.033-.074-.088-.074-.114-.074H5.127Z"/></svg>

);
