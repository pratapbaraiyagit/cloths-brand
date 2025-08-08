import { CategoriesTable } from "@/components/dashboard/CategoriesTable";
import { ProductsTable } from "@/components/dashboard/ProductsTable";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Gem, Shirt } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="bg-secondary/30 min-h-[calc(100vh-160px)]">
      <div className="container mx-auto px-4 py-12 md:px-6 md:py-16">
        <div className="text-left mb-8">
            <h1 className="font-headline text-4xl md:text-5xl font-bold text-foreground">
                Admin Dashboard
            </h1>
            <p className="mt-2 text-lg text-muted-foreground">
                Manage your store's products and categories.
            </p>
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
