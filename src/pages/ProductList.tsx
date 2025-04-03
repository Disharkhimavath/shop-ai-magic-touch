import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductGrid from "@/components/ProductGrid";
import FilterSidebar from "@/components/FilterSidebar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useIsMobile } from "@/hooks/use-mobile";
import { products, sortOptions, brands } from "@/lib/data";
import { Product, FilterOptions, SortOption } from "@/lib/types";

const ProductList = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const isMobile = useIsMobile();

  // Extract query parameters
  const categoryParam = searchParams.get("category");
  const searchQuery = searchParams.get("search");

  // State
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sortBy, setSortBy] = useState<string>("popular");
  
  const [filters, setFilters] = useState<FilterOptions>({
    categories: categoryParam ? [categoryParam] : [],
    brands: [],
    priceRange: { min: 0, max: 100 },
  });

  // Get unique categories from products
  const categories = [...new Set(products.map((product) => product.category))];

  // Apply filters and sort
  useEffect(() => {
    setIsLoading(true);
    
    // Simulate loading delay
    setTimeout(() => {
      let result = [...products];

      // Filter by search query
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        result = result.filter(
          (product) =>
            product.name.toLowerCase().includes(query) ||
            product.description.toLowerCase().includes(query) ||
            product.brand.toLowerCase().includes(query) ||
            product.tags.some(tag => tag.toLowerCase().includes(query))
        );
      }

      // Apply category filter
      if (filters.categories.length > 0) {
        result = result.filter((product) =>
          filters.categories.includes(product.category)
        );
      }

      // Apply brand filter
      if (filters.brands.length > 0) {
        result = result.filter((product) => 
          filters.brands.includes(product.brand)
        );
      }

      // Apply price filter
      result = result.filter((product) => {
        const price = product.discountPercentage
          ? product.price * (1 - product.discountPercentage / 100)
          : product.price;
        return price >= filters.priceRange.min && price <= filters.priceRange.max;
      });

      // Apply sorting
      switch (sortBy) {
        case "price-asc":
          result.sort((a, b) => {
            const priceA = a.discountPercentage
              ? a.price * (1 - a.discountPercentage / 100)
              : a.price;
            const priceB = b.discountPercentage
              ? b.price * (1 - b.discountPercentage / 100)
              : b.price;
            return priceA - priceB;
          });
          break;
        case "price-desc":
          result.sort((a, b) => {
            const priceA = a.discountPercentage
              ? a.price * (1 - a.discountPercentage / 100)
              : a.price;
            const priceB = b.discountPercentage
              ? b.price * (1 - b.discountPercentage / 100)
              : b.price;
            return priceB - priceA;
          });
          break;
        case "rating-desc":
          result.sort((a, b) => b.rating - a.rating);
          break;
        case "newest":
          // For demo purposes, just use reverse order of products array
          result.reverse();
          break;
        default:
          // "popular" - Do nothing, keep original order
          break;
      }

      setFilteredProducts(result);
      setIsLoading(false);
    }, 500);
  }, [searchQuery, filters, sortBy, categoryParam]);

  // Handle filter changes
  const handleFilterChange = (newFilters: FilterOptions) => {
    setFilters(newFilters);
  };

  // Determine page title
  const getPageTitle = () => {
    if (searchQuery) {
      return `Search results for "${searchQuery}"`;
    }
    
    if (filters.categories.length === 1) {
      const category = filters.categories[0];
      return category.charAt(0).toUpperCase() + category.slice(1);
    }
    
    return "All Products";
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">{getPageTitle()}</h1>

        <div className="flex flex-col-reverse md:flex-row gap-8">
          {/* Sidebar - Hidden on mobile, shown on desktop */}
          <div className="md:w-1/4 lg:w-1/5 hidden md:block">
            <FilterSidebar
              categories={categories}
              initialFilters={filters}
              onFilterChange={handleFilterChange}
            />
          </div>

          {/* Main content */}
          <div className="md:w-3/4 lg:w-4/5">
            {/* Mobile filters and sorting */}
            <div className="flex items-center justify-between mb-6">
              {/* Mobile filter button */}
              <div className="md:hidden">
                <FilterSidebar
                  categories={categories}
                  initialFilters={filters}
                  onFilterChange={handleFilterChange}
                  isMobile
                />
              </div>

              {/* Sort dropdown */}
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">Sort by:</span>
                <Select
                  value={sortBy}
                  onValueChange={(value) => setSortBy(value)}
                >
                  <SelectTrigger className="w-[180px] h-9">
                    <SelectValue placeholder="Select a sort option" />
                  </SelectTrigger>
                  <SelectContent>
                    {sortOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Results count */}
            <div className="mb-6 text-sm text-gray-600">
              {!isLoading && 
                `Showing ${filteredProducts.length} products`
              }
            </div>

            {/* Products grid */}
            <ProductGrid products={filteredProducts} loading={isLoading} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductList;
