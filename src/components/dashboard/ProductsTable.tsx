
"use client";

import { useState, useEffect } from "react";
import { type Product, type Category } from "@/lib/mock-data";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Edit, PlusCircle, Trash2, Loader2, Upload, Link2 } from "lucide-react";
import { Badge } from "../ui/badge";
import { useToast } from "@/hooks/use-toast";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import Image from "next/image";
import { ScrollArea } from "../ui/scroll-area";

function ProductForm({ product, categories, onSave, onOpenChange }: { product: Partial<Product> | null, categories: Category[], onSave: () => void, onOpenChange: (open: boolean) => void }) {
    const [name, setName] = useState(product?.name || "");
    const [price, setPrice] = useState(product?.price || 0);
    const [categoryId, setCategoryId] = useState(product?.categoryId || "");
    const [description, setDescription] = useState(product?.description || "");
    const [image, setImage] = useState(product?.image || "");
    const [isSaving, setIsSaving] = useState(false);
    const { toast } = useToast();

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSaving(true);
        
        const category = categories.find(c => c.id === categoryId);
        if (!category) {
            toast({ variant: "destructive", title: "Error", description: "Please select a valid category." });
            setIsSaving(false);
            return;
        }

        const productData = { name, price, categoryId, categoryName: category.name, description, image: image || 'https://placehold.co/600x800.png' };
        const method = product?.id ? 'PUT' : 'POST';
        const url = product?.id ? `/api/products/${product.id}` : '/api/products';

        try {
            const response = await fetch(url, {
                method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(productData),
            });

            if (!response.ok) throw new Error(`Failed to ${product?.id ? 'update' : 'create'} product`);

            toast({ title: `Product ${product?.id ? 'Updated' : 'Created'}`, description: `Product "${name}" has been successfully saved.` });
            onSave();
            onOpenChange(false);
        } catch (error) {
            toast({ variant: "destructive", title: "Error", description: (error as Error).message });
        } finally {
            setIsSaving(false);
        }
    };

    return (
        <>
            <DialogHeader>
                <DialogTitle className="font-headline">{product?.id ? "Edit Product" : "Add New Product"}</DialogTitle>
            </DialogHeader>
            <ScrollArea className="max-h-[70vh] pr-6">
                <form className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">Name</Label>
                        <Input id="name" value={name} onChange={e => setName(e.target.value)} className="col-span-3" required />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="price" className="text-right">Price</Label>
                        <Input id="price" type="number" value={price} onChange={e => setPrice(Number(e.target.value))} className="col-span-3" required />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="category" className="text-right">Category</Label>
                        <Select value={categoryId} onValueChange={setCategoryId} required>
                            <SelectTrigger className="col-span-3">
                                <SelectValue placeholder="Select a category" />
                            </SelectTrigger>
                            <SelectContent>
                                {categories.map((category) => (
                                    <SelectItem key={category.id} value={category.id}>
                                        {category.name}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="description" className="text-right">Description</Label>
                        <Textarea id="description" value={description} onChange={e => setDescription(e.target.value)} className="col-span-3" required />
                    </div>
                    <div className="grid grid-cols-4 items-start gap-4">
                        <Label className="text-right pt-2">Image</Label>
                        <div className="col-span-3">
                            <Tabs defaultValue="url">
                                <TabsList className="grid w-full grid-cols-2">
                                    <TabsTrigger value="url"><Link2 className="mr-2 h-4 w-4" /> URL</TabsTrigger>
                                    <TabsTrigger value="upload"><Upload className="mr-2 h-4 w-4" /> Upload</TabsTrigger>
                                </TabsList>
                                <TabsContent value="url" className="mt-2">
                                    <Input id="image-url" placeholder="https://example.com/image.png" value={image} onChange={e => setImage(e.target.value)} />
                                </TabsContent>
                                <TabsContent value="upload" className="mt-2">
                                    <Input id="image-upload" type="file" accept="image/*" onChange={handleImageUpload} />
                                </TabsContent>
                            </Tabs>
                            {image && (
                                <div className="mt-4 relative w-full h-48 rounded-md overflow-hidden border">
                                    <Image src={image} alt="Image preview" layout="fill" objectFit="contain" />
                                </div>
                            )}
                        </div>
                    </div>
                </form>
            </ScrollArea>
            <DialogFooter>
                <DialogClose asChild>
                    <Button type="button" variant="secondary" onClick={() => onOpenChange(false)}>Close</Button>
                </DialogClose>
                <Button type="submit" onClick={handleSubmit} disabled={isSaving}>
                    {isSaving && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    {isSaving ? "Saving..." : "Save Product"}
                </Button>
            </DialogFooter>
        </>
    );
}


export function ProductsTable() {
    const [products, setProducts] = useState<Product[]>([]);
    const [categories, setCategories] = useState<Category[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const { toast } = useToast();

    const fetchProductsAndCategories = async () => {
        try {
            setIsLoading(true);
            const [productsRes, categoriesRes] = await Promise.all([
                fetch('/api/products'),
                fetch('/api/categories')
            ]);
            if (!productsRes.ok || !categoriesRes.ok) throw new Error("Failed to fetch data");
            const productsData = await productsRes.json();
            const categoriesData = await categoriesRes.json();
            setProducts(productsData);
            setCategories(categoriesData);
        } catch (error) {
            toast({ variant: "destructive", title: "Error", description: "Could not fetch data from server." });
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchProductsAndCategories();
    }, []);

    const handleAddClick = () => {
        setSelectedProduct(null);
        setIsFormOpen(true);
    };

    const handleEditClick = (product: Product) => {
        setSelectedProduct(product);
        setIsFormOpen(true);
    };
    
    const handleDelete = async (productId: string) => {
        try {
            const response = await fetch(`/api/products/${productId}`, { method: 'DELETE' });
            if (!response.ok) throw new Error("Failed to delete product");
            toast({ title: "Product Deleted", description: "The product has been successfully deleted." });
            fetchProductsAndCategories(); // Refresh data
        } catch (error) {
             toast({ variant: "destructive", title: "Error", description: (error as Error).message });
        }
    }


    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-64">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
        );
    }

    return (
        <div>
            <div className="flex justify-end mb-4">
                <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
                    <DialogTrigger asChild>
                        <Button onClick={handleAddClick}>
                            <PlusCircle className="mr-2 h-4 w-4" /> Add Product
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[625px]">
                        <ProductForm 
                            product={selectedProduct} 
                            categories={categories}
                            onSave={fetchProductsAndCategories}
                            onOpenChange={setIsFormOpen}
                        />
                    </DialogContent>
                </Dialog>
            </div>
            <div className="rounded-md border">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Name</TableHead>
                            <TableHead>Category</TableHead>
                            <TableHead>Price</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {products.map((product: Product) => (
                            <TableRow key={product.id}>
                                <TableCell className="font-medium">{product.name}</TableCell>
                                <TableCell>
                                    <Badge variant="outline">{product.categoryName}</Badge>
                                </TableCell>
                                <TableCell>${product.price.toFixed(2)}</TableCell>
                                <TableCell className="text-right">
                                    <Button variant="ghost" size="icon" onClick={() => handleEditClick(product)}>
                                        <Edit className="h-4 w-4" />
                                    </Button>
                                    <AlertDialog>
                                        <AlertDialogTrigger asChild>
                                            <Button variant="ghost" size="icon" className="text-destructive hover:text-destructive">
                                                <Trash2 className="h-4 w-4" />
                                            </Button>
                                        </AlertDialogTrigger>
                                        <AlertDialogContent>
                                            <AlertDialogHeader>
                                                <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                                                <AlertDialogDescription>
                                                    This action cannot be undone. This will permanently delete the product "{product.name}".
                                                </AlertDialogDescription>
                                            </AlertDialogHeader>
                                            <AlertDialogFooter>
                                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                                <AlertDialogAction onClick={() => handleDelete(product.id)}>Delete</AlertDialogAction>
                                            </AlertDialogFooter>
                                        </AlertDialogContent>
                                    </AlertDialog>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}
