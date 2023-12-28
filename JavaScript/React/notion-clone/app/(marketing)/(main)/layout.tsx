"use client";
import { Spinner } from "@/components/Spinner";
import { useConvexAuth } from "convex/react";
import { redirect } from "next/dist/server/api-utils";
const MainLayout = ({ children }: { children: React.ReactNode }) => {
    const { isAuthenticated, isLoading } = useConvexAuth();
    if (isLoading) {
        return (
            <div className="h-full flex items-cecnter justify-center">
                <Spinner size="lg" />
            </div>
        );
    }
    if (!isAuthenticated) {
        return redirect("/");
    }
    return <div>{children}</div>;
};

export default MainLayout;
