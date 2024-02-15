"use client";

import { Toolbar } from "@/components/toolbar";
import { Cover } from "@/components/ui/cover";
import { Skeleton } from "@/components/ui/skeleton";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useMutation, useQuery } from "convex/react";

interface DocumentIdPageProps {
    params: {
        documentId: Id<"documents">;
    };
}

const DocumentIdPage = ({ params }: DocumentIdPageProps) => {
    const document = useQuery(api.documents.getById, {
        documentId: params.documentId,
    });

    const update = useMutation(api.documents.update);

    const onChange = (content: string) => {
        update({
            id: params.documentId,
            content,
        });
    };

    if (document === undefined) {
        return <div>Not Founda</div>;
    }

    if (document === null) {
        return <div>Not found</div>;
    }

    return (
        <div className="pb-40">
            <Cover url={document.coverImage} />
            <div className="md:max-w-3xl lg:max-w-4xl mx-auto">
                <Toolbar initialData={document} />
            </div>
        </div>
    );
};

export default DocumentIdPage;
