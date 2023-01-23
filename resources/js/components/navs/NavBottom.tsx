import React from 'react';
import BaseIcon from '../widgets/BaseIcon';
import {
    mdiAccount,
    mdiMenu,
    mdiHomeAccount,
    mdiTaxi,
    mdiNewspaperVariantMultiple,
} from '@mdi/js';
/**
 * Props
 */
interface Props {
    drawerId: string;
}
/**
 *
 * @returns
 */
function NavBottom({ drawerId }: Props) {
    const size = '1.8rem';
    const iconClass = 'stroke-slate-700 hover:fill-primary';
    return (
        <div className="navbar bg-base-100 sm:hidden fixed bottom-0 z-30">
            <div className="flex-1">
                <label className="btn btn-square btn-ghost" htmlFor={drawerId}>
                    <BaseIcon path={mdiMenu} size={size} className={iconClass} />
                </label>
            </div>
            <div className="flex-1">
                <BaseIcon path={mdiHomeAccount} size={size} className={iconClass} />
            </div>
            <div className="flex-1">
                <BaseIcon path={mdiTaxi} size={size} className={iconClass} />
            </div>
            <div className="flex-1">
                <BaseIcon
                    path={mdiNewspaperVariantMultiple}
                    size={size}
                    className={iconClass}
                />
            </div>
            <div className="flex-1">
                <BaseIcon path={mdiAccount} size={size} className={iconClass} />
            </div>
        </div>
    );
}

export default NavBottom;
