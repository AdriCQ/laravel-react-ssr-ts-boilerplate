import React, { HTMLProps } from 'react';
import { joinClassName } from '@/helpers';
import BaseIcon from '@/components/widgets/BaseIcon';
/**
 * Props
 */
interface Props extends HTMLProps<HTMLDivElement>, Partial<IDrawerLink> {
    header?: boolean;
}
export interface IDrawerLink {
    label?: string;
    icon?: string;
    items?: IDrawerLink[];
}
/**
 * DrawerItem
 * @returns
 */
function DrawerItem({ className, icon, label, header }: Props) {
    if (header) {
        return (
            <div className={joinClassName([className, 'text-center p-2'])}>
                {label}
            </div>
        );
    }
    return (
        <li className={joinClassName([className, 'hover:bg-slate-50'])}>
            <div>
                {icon ? (
                    <>
                        <span>
                            <BaseIcon path={icon} size="1rem" />
                        </span>
                        <span className="pl-1">{label}</span>
                    </>
                ) : (
                    <span className="pl-8">{label}</span>
                )}
            </div>
        </li>
    );
}

export default DrawerItem;
