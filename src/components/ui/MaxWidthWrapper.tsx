'use client'
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface MaxWarapperInterface{
    className?:string;
    children:ReactNode
}

const MaxWidthWrapper = ({
    className,
    children
}:MaxWarapperInterface ) => {
    return(
        <div className={cn('container mx-auto ', className)}>
        {children}
    </div>
    )
};

export default MaxWidthWrapper;