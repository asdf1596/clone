"user client";

import { cn } from "@/lib/utils";
import Image from "next/image";

interface CoverImageProps {
    url?: string;
    preview?: boolean;
}

export const Cover = ({ url, preview }: CoverImageProps) => {
    return (
        <div
        // className={cn(
        //     "relateve w-full h-[35vh] group",
        //     !url && "h-[12vh]",
        //     url && "bg-muted"
        // )}
        >
            Image
            {/* {!!url && (
                <Image src={url} fill alt="Cover" className="object-cover" />
            )} */}
        </div>
    );
};
