
import { CategoriesTable } from "@/components/dashboard/CategoriesTable";
import { ProductsTable } from "@/components/dashboard/ProductsTable";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Gem, Shirt, User } from "lucide-react";
import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className="bg-secondary/30 min-h-[calc(100vh-160px)]">
      <div className="container mx-auto px-4 py-12 md:px-6 md:py-16">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <div className="text-left mb-4 md:mb-0">
                <h1 className="font-headline text-4xl md:text-5xl font-bold text-foreground">
                    Admin Dashboard
                </h1>
                <p className="mt-2 text-lg text-muted-foreground">
                    Manage your store's products and categories.
                </p>
            </div>
            <Button asChild>
                <Link href="/dashboard/profile">
                    <User className="mr-2 h-5 w-5" />
                    Manage Profile
                </Link>
            </Button>
        </div>
        <Tabs defaultValue="products">
          <TabsList className="grid w-full grid-cols-2 md:w-[400px]">
            <TabsTrigger value="products" className="py-2">
                <Shirt className="mr-2 h-5 w-5" />
                Manage Products
            </TabsTrigger>
            <TabsTrigger value="categories" className="py-2">
                <Gem className="mr-2 h-5 w-5" />
                Manage Categories
            </TabsTrigger>
          </TabsList>
          <TabsContent value="products" className="mt-6">
            <ProductsTable />
          </TabsContent>
          <TabsContent value="categories" className="mt-6">
            <CategoriesTable />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
