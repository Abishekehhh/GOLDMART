import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  LayoutDashboard,
  Package,
  PlusCircle,
  Edit,
  Trash2,
  LogOut,
  Menu,
  X,
  Eye,
  ChevronRight,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { GoldRateTicker } from '@/components/home/GoldRateTicker';
import { jewelleryItems, formatPrice, shops } from '@/data/mockData';
import { motion, AnimatePresence } from 'framer-motion';

const sidebarItems = [
  { id: 'overview', label: 'Overview', icon: LayoutDashboard },
  { id: 'stock', label: 'View Stock', icon: Package },
  { id: 'add', label: 'Add Jewellery', icon: PlusCircle },
];

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  const myShop = shops[0]; // Mock: first shop is "my" shop
  const myItems = jewelleryItems.filter((j) => j.shopId === myShop.id);

  return (
    <div className="min-h-screen bg-background">
      <GoldRateTicker />

      {/* Header */}
      <header className="bg-card border-b border-border sticky top-0 z-40">
        <div className="flex items-center justify-between h-16 px-4">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="lg:hidden p-2 text-foreground"
            >
              <Menu className="h-6 w-6" />
            </button>
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <span className="font-serif text-primary-foreground text-lg font-bold">G</span>
              </div>
              <span className="font-serif text-xl font-semibold text-foreground">
                Gold<span className="text-primary">Bazaar</span>
              </span>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground hidden sm:block">
              Welcome, {myShop.name}
            </span>
            <Link to="/">
              <Button variant="ghost" size="sm" className="text-muted-foreground">
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <AnimatePresence>
          {(isSidebarOpen || window.innerWidth >= 1024) && (
            <motion.aside
              initial={{ x: -280 }}
              animate={{ x: 0 }}
              exit={{ x: -280 }}
              className={`fixed lg:static inset-y-0 left-0 z-50 w-64 bg-card border-r border-border pt-4 lg:pt-0 ${
                isSidebarOpen ? 'block' : 'hidden lg:block'
              }`}
            >
              {/* Mobile Close */}
              <button
                onClick={() => setIsSidebarOpen(false)}
                className="lg:hidden absolute top-4 right-4 p-2"
              >
                <X className="h-5 w-5" />
              </button>

              <nav className="p-4 space-y-2 mt-12 lg:mt-0">
                {sidebarItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveTab(item.id);
                      setIsSidebarOpen(false);
                    }}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
                      activeTab === item.id
                        ? 'bg-primary text-primary-foreground'
                        : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                    }`}
                  >
                    <item.icon className="h-5 w-5" />
                    {item.label}
                  </button>
                ))}
              </nav>
            </motion.aside>
          )}
        </AnimatePresence>

        {/* Overlay */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-charcoal/50 z-40 lg:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        {/* Main Content */}
        <main className="flex-1 p-4 md:p-8 min-h-[calc(100vh-64px)]">
          {/* Overview */}
          {activeTab === 'overview' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <h1 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-6">
                Dashboard Overview
              </h1>

              {/* Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {[
                  { label: 'Total Items', value: myItems.length, color: 'bg-primary' },
                  { label: 'Categories', value: [...new Set(myItems.map((i) => i.category))].length, color: 'bg-secondary' },
                  { label: 'Special Offers', value: myItems.filter((i) => i.isSpecialOffer).length, color: 'bg-accent' },
                  { label: 'Total Value', value: formatPrice(myItems.reduce((sum, i) => sum + i.totalPrice, 0)), color: 'bg-primary' },
                ].map((stat) => (
                  <div key={stat.label} className="bg-card rounded-xl p-6 border border-border">
                    <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                    <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                  </div>
                ))}
              </div>

              {/* Quick Actions */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button
                  onClick={() => setActiveTab('add')}
                  className="bg-card rounded-xl p-6 border border-border hover:border-primary transition-colors text-left group"
                >
                  <PlusCircle className="h-8 w-8 text-primary mb-3" />
                  <h3 className="font-serif font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                    Add New Jewellery
                  </h3>
                  <p className="text-sm text-muted-foreground">Add a new piece to your collection</p>
                </button>
                <button
                  onClick={() => setActiveTab('stock')}
                  className="bg-card rounded-xl p-6 border border-border hover:border-primary transition-colors text-left group"
                >
                  <Package className="h-8 w-8 text-primary mb-3" />
                  <h3 className="font-serif font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                    Manage Stock
                  </h3>
                  <p className="text-sm text-muted-foreground">View and edit your inventory</p>
                </button>
              </div>
            </motion.div>
          )}

          {/* Stock View */}
          {activeTab === 'stock' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                <h1 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
                  Jewellery Stock
                </h1>
                <Button
                  onClick={() => setActiveTab('add')}
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  <PlusCircle className="h-4 w-4 mr-2" />
                  Add New
                </Button>
              </div>

              {/* Stock Table */}
              <div className="bg-card rounded-xl border border-border overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-muted/50">
                      <tr>
                        <th className="text-left p-4 text-sm font-semibold text-foreground">Item</th>
                        <th className="text-left p-4 text-sm font-semibold text-foreground">Category</th>
                        <th className="text-left p-4 text-sm font-semibold text-foreground">Weight</th>
                        <th className="text-left p-4 text-sm font-semibold text-foreground">Price</th>
                        <th className="text-left p-4 text-sm font-semibold text-foreground">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {myItems.map((item) => (
                        <tr key={item.id} className="border-t border-border hover:bg-muted/30">
                          <td className="p-4">
                            <div className="flex items-center gap-3">
                              <div className="w-12 h-12 rounded-lg bg-muted overflow-hidden">
                                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                              </div>
                              <span className="font-medium text-foreground">{item.name}</span>
                            </div>
                          </td>
                          <td className="p-4 text-muted-foreground">{item.category}</td>
                          <td className="p-4 text-muted-foreground">{item.weight}g</td>
                          <td className="p-4 font-semibold text-primary">{formatPrice(item.totalPrice)}</td>
                          <td className="p-4">
                            <div className="flex items-center gap-2">
                              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                                <Eye className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                                <Edit className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-destructive">
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>
          )}

          {/* Add Jewellery Form */}
          {activeTab === 'add' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <h1 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-6">
                Add New Jewellery
              </h1>
              <AddJewelleryForm onSuccess={() => setActiveTab('stock')} />
            </motion.div>
          )}
        </main>
      </div>
    </div>
  );
}

function AddJewelleryForm({ onSuccess }: { onSuccess: () => void }) {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      toast({
        title: 'Jewellery Added!',
        description: 'Your new item has been added to the inventory.',
      });
      setIsLoading(false);
      onSuccess();
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-card rounded-xl border border-border p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Jewellery Name */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">Jewellery Name</label>
          <input
            type="text"
            required
            className="w-full px-4 py-2 bg-muted border border-border rounded-lg focus:border-primary outline-none"
            placeholder="e.g., Traditional Temple Necklace"
          />
        </div>

        {/* Category */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">Category</label>
          <select className="w-full px-4 py-2 bg-muted border border-border rounded-lg focus:border-primary outline-none">
            <option value="">Select Category</option>
            <option value="Ring">Ring</option>
            <option value="Necklace">Necklace</option>
            <option value="Chain">Chain</option>
            <option value="Bracelet">Bracelet</option>
            <option value="Earrings">Earrings</option>
            <option value="Pendant">Pendant</option>
            <option value="Bangle">Bangle</option>
          </select>
        </div>

        {/* Weight */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">Weight (grams)</label>
          <input
            type="number"
            step="0.01"
            required
            className="w-full px-4 py-2 bg-muted border border-border rounded-lg focus:border-primary outline-none"
            placeholder="e.g., 25.5"
          />
        </div>

        {/* Gold Purity */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">Gold Purity</label>
          <select className="w-full px-4 py-2 bg-muted border border-border rounded-lg focus:border-primary outline-none">
            <option value="22K">22K Gold</option>
            <option value="24K">24K Gold</option>
            <option value="18K">18K Gold</option>
          </select>
        </div>

        {/* Price Per Gram */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">Price Per Gram (₹)</label>
          <input
            type="number"
            required
            className="w-full px-4 py-2 bg-muted border border-border rounded-lg focus:border-primary outline-none"
            placeholder="e.g., 5730"
          />
        </div>

        {/* Making Charge */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">Making Charge (₹)</label>
          <input
            type="number"
            required
            className="w-full px-4 py-2 bg-muted border border-border rounded-lg focus:border-primary outline-none"
            placeholder="e.g., 15000"
          />
        </div>

        {/* Image Upload */}
        <div className="space-y-2 md:col-span-2">
          <label className="text-sm font-medium text-foreground">Upload Image</label>
          <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary transition-colors cursor-pointer">
            <input type="file" accept="image/*" className="hidden" id="image-upload" />
            <label htmlFor="image-upload" className="cursor-pointer">
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                <PlusCircle className="h-8 w-8 text-muted-foreground" />
              </div>
              <p className="text-muted-foreground">Click to upload or drag and drop</p>
              <p className="text-xs text-muted-foreground mt-1">PNG, JPG up to 5MB</p>
            </label>
          </div>
        </div>

        {/* Description */}
        <div className="space-y-2 md:col-span-2">
          <label className="text-sm font-medium text-foreground">Description</label>
          <textarea
            rows={3}
            className="w-full px-4 py-2 bg-muted border border-border rounded-lg focus:border-primary outline-none resize-none"
            placeholder="Describe your jewellery piece..."
          />
        </div>
      </div>

      <div className="flex justify-end gap-4 mt-6">
        <Button type="button" variant="outline" className="border-border">
          Cancel
        </Button>
        <Button type="submit" disabled={isLoading} className="bg-primary text-primary-foreground hover:bg-primary/90">
          {isLoading ? 'Adding...' : 'Add Jewellery'}
        </Button>
      </div>
    </form>
  );
}

import { useToast } from '@/hooks/use-toast';
