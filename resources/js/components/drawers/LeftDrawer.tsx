import React, { HtmlHTMLAttributes, PropsWithChildren } from 'react';

interface Prop extends PropsWithChildren<HtmlHTMLAttributes<HTMLDivElement>> {
    items?: React.ReactNode;
    id: string;
}
/**
 * LeftDrawer
 * @param param0
 * @returns
 */
function LeftDrawer({ className, children, items, id }: Prop) {
    return (
        <div className={`drawer${className ? ' ' + className : ''}`}>
            <input id={id} type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">{children}</div>
            <div className="drawer-side">
                <label htmlFor={id} className="drawer-overlay">
                    overlay
                </label>
                {items}
            </div>
        </div>
    );
}

export default LeftDrawer;
