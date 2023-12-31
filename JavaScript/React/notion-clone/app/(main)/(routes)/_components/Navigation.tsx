"use client";

import { ChevronsLeft } from "lucide-react";
import { ElementRef, useRef, useState } from "react";

export const Navigation = () => {
    const isResizingRef = useRef(false);
    const sidebarRef = useRef<ElementRef<"aside">>(null);
    const navbarRef = useRef<ElementRef<"div">>(null);
    const [isResetting, setIsResetting] = useState(false);
    const [isCollapsed, setIsCollapsed] = useState(false);
    return (
        <>
            <aside className="group/sidebar h-full bg-secondary overflow-y-auto relative flex w-60 flex-col z-[99999]">
                <div
                    role="button"
                    className="h-6 w-6 text-muted-muted-foreground rounded-sm hover:bg-neutral-300 dark:hover:bg-neutral-600 absolute top-3 right-2 opacity-0 group-hover/sidebar:opacity-100 transition"
                >
                    <ChevronsLeft className="h-6 w-6" />
                </div>
                <div>
                    <p>Action Items</p>
                </div>
                <div className="mt-4">
                    <p>Documents</p>
                </div>
                <div className="opacity-0 group-hover/sidebar:opacity-100 transition cursur-ew-rewize absolute h-full w-1 bg-pimary/10 right-0 top-0" />
            </aside>
        </>
    );
};
