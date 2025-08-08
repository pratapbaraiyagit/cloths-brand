
"use client";

import { useState, useEffect } from "react";
import { type Category } from "@/lib/mock-data";
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
import { Edit, PlusCircle, Trash2, Loader2, Upload, Link2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { ScrollArea } from "../ui/scroll-area";

function CategoryForm({ category, onSave, onOpenChange }: { category: Partial<Category> | null, onSave: () => void, onOpenChange: (open: boolean) => void }) {
    const [name, setName] = useState(category?.name || "");
    const [description, setDescription] = useState(category?.description || "");
    const [image, setImage] = useState(category?.image || "");
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
        const categoryData = { name, description, image: image || 'https://placehold.co/800x600.png' };
        const method = category?.id ? 'PUT' : 'POST';
        const url = category?.id ? `/api/categories/${category.id}` : '/api/categories';

        try {
            const response = await fetch(url, {
                method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(categoryData),
            });

            if (!response.ok) throw new Error(`Failed to ${category?.id ? 'update' : 'create'} category`);

            toast({ title: `Category ${category?.id ? 'Updated' : 'Created'}`, description: `Category "${name}" has been successfully saved.` });
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
                <DialogTitle className="font-headline">{category?.id ? 'Edit Category' : 'Add New Category'}</DialogTitle>
            </DialogHeader>
            <ScrollArea className="max-h-[70vh] pr-6">
                <form className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">Name</Label>
                        <Input id="name" value={name} onChange={e => setName(e.target.value)} className="col-span-3" required />
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
                    {isSaving ? "Saving..." : "Save Category"}
                </Button>
            </DialogFooter>
        </>
    );
}

export function CategoriesTable() {
    const [categories, setCategories] = useState<Category[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
    const { toast } = useToast();

    const fetchCategories = async () => {
        try {
            setIsLoading(true);
            const res = await fetch('/api/categories');
            if (!res.ok) throw new Error("Failed to fetch categories");
            const data = await res.json();
            setCategories(data);
        } catch (error) {
            toast({ variant: "destructive", title: "Error", description: "Could not fetch categories from server." });
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchCategories();
    }, []);

    const handleAddClick = () => {
        setSelectedCategory(null);
        setIsFormOpen(true);
    };

    const handleEditClick = (category: Category) => {
        setSelectedCategory(category);
        setIsFormOpen(true);
    };

    const handleDelete = async (categoryId: string) => {
        try {
            const response = await fetch(`/api/categories/${categoryId}`, { method: 'DELETE' });
            if (!response.ok) throw new Error("Failed to delete category");
            toast({ title: "Category Deleted", description: "The category has been successfully deleted." });
            fetchCategories();
        } catch (error) {
            toast({ variant: "destructive", title: "Error", description: (error as Error).message });
        }
    };
    
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
                            <PlusCircle className="mr-2 h-4 w-4" /> Add Category
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[625px]">
                        <CategoryForm category={selectedCategory} onSave={fetchCategories} onOpenChange={setIsFormOpen} />
                    </DialogContent>
                </Dialog>
            </div>
            <div className="rounded-md border">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Name</TableHead>
                            <TableHead>Description</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {categories.map((category: Category) => (
                            <TableRow key={category.id}>
                                <TableCell className="font-medium">{category.name}</TableCell>
                                <TableCell>{category.description}</TableCell>
                                <TableCell className="text-right">
                                    <Button variant="ghost" size="icon" onClick={() => handleEditClick(category)}>
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
                                                    This action cannot be undone. This will permanently delete the category "{category.name}".
                                                </AlertDialogDescription>
                                            </AlertDialogHeader>
                                            <AlertDialogFooter>
                                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                                <AlertDialogAction onClick={() => handleDelete(category.id)}>Delete</AlertDialogAction>
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
