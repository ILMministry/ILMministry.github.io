import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  DollarSign, 
  TrendingUp, 
  Target, 
  PiggyBank, 
  Sparkles, 
  Heart,
  Building2,
  Home,
  Plus,
  BarChart3,
  Users,
  Settings,
  Calendar
} from "lucide-react";
import { Link } from "react-router-dom";

interface BudgetCategory {
  name: string;
  allocated: number;
  spent: number;
  percentage: number;
  icon: any;
  color: string;
}

export default function BudgetDashboard() {
  const [totalBudget, setTotalBudget] = useState(0);
  const [budgetInput, setBudgetInput] = useState("");

  const [categories, setCategories] = useState<BudgetCategory[]>([
    { name: "Business", allocated: 0, spent: 0, percentage: 40, icon: Building2, color: "text-primary" },
    { name: "Living", allocated: 0, spent: 0, percentage: 30, icon: Home, color: "text-secondary" },
    { name: "Savings", allocated: 0, spent: 0, percentage: 20, icon: PiggyBank, color: "text-success" },
    { name: "Spiritual", allocated: 0, spent: 0, percentage: 10, icon: Sparkles, color: "text-accent" }
  ]);

  const handleCreateBudget = () => {
    const budget = parseFloat(budgetInput);
    if (budget > 0) {
      setTotalBudget(budget);
      const updatedCategories = categories.map(cat => ({
        ...cat,
        allocated: budget * (cat.percentage / 100)
      }));
      setCategories(updatedCategories);
    }
  };

  const totalSpent = categories.reduce((sum, cat) => sum + cat.spent, 0);
  const totalAllocated = categories.reduce((sum, cat) => sum + cat.allocated, 0);
  const remaining = totalAllocated - totalSpent;
  const spentPercentage = totalAllocated > 0 ? (totalSpent / totalAllocated) * 100 : 0;

  return (
    <div className="min-h-screen bg-background p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="flex items-center gap-2">
            <Sparkles className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold text-gradient-divine">The Oracle Life App</h1>
          </div>
        </div>
        <p className="text-muted-foreground">Holy Spirit Guided Wisdom</p>
      </div>

      {/* Main Budget Section */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <DollarSign className="h-6 w-6 text-primary" />
              Monthly Budget Management
            </h2>
            <p className="text-muted-foreground">Track and optimize your financial allocations</p>
          </div>
          <Badge variant="secondary" className="text-sm">
            {spentPercentage.toFixed(1)}% used
          </Badge>
        </div>

        {/* Budget Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="card-elevated">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Monthly Budget</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">
                ${totalBudget.toLocaleString()}
              </div>
              <p className="text-xs text-muted-foreground mt-1">Total allocated</p>
              <Progress value={spentPercentage} className="mt-3 h-2" />
              <p className="text-xs text-muted-foreground mt-2">
                {spentPercentage.toFixed(1)}% used • ${remaining.toLocaleString()} remaining
              </p>
            </CardContent>
          </Card>

          <Card className="card-elevated">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Spent</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-warning">
                ${totalSpent.toLocaleString()}
              </div>
              <p className="text-xs text-muted-foreground mt-1">This month</p>
              <div className="flex items-center gap-1 mt-3">
                <TrendingUp className="h-3 w-3 text-success" />
                <span className="text-xs text-success">+2.1%</span>
              </div>
            </CardContent>
          </Card>

          <Card className="card-elevated">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Remaining Budget</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-success">
                ${remaining.toLocaleString()}
              </div>
              <p className="text-xs text-muted-foreground mt-1">Available to spend</p>
              <div className="flex items-center gap-1 mt-3">
                <Target className="h-3 w-3 text-accent" />
                <span className="text-xs text-muted-foreground">On track</span>
              </div>
            </CardContent>
          </Card>

          <Card className="card-elevated">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Daily Average</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-secondary">
                ${Math.round(totalSpent / 30).toLocaleString()}
              </div>
              <p className="text-xs text-muted-foreground mt-1">Per day spent</p>
              <div className="flex items-center gap-1 mt-3">
                <BarChart3 className="h-3 w-3 text-primary" />
                <span className="text-xs text-muted-foreground">Trending up</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Create Budget Section */}
        <Card className="card-elevated mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Plus className="h-5 w-5" />
              Create Monthly Budget
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <label className="text-sm font-medium mb-2 block">Total Monthly Budget</label>
              <Input
                type="number"
                placeholder="Enter total monthly budget"
                value={budgetInput}
                onChange={(e) => setBudgetInput(e.target.value)}
                className="w-full"
              />
            </div>

            <div>
              <p className="text-sm font-medium mb-4">Suggested allocation:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {categories.map((category) => {
                  const IconComponent = category.icon;
                  const allocated = budgetInput ? parseFloat(budgetInput) * (category.percentage / 100) : 0;
                  return (
                    <div key={category.name} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                      <div className="flex items-center gap-3">
                        <IconComponent className={`h-4 w-4 ${category.color}`} />
                        <span className="text-sm">
                          {category.name} ({category.percentage}%)
                        </span>
                      </div>
                      <span className="text-sm font-medium">${allocated.toLocaleString()}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            <Button 
              onClick={handleCreateBudget} 
              className="w-full gradient-divine glow-hover transition-divine"
              disabled={!budgetInput || parseFloat(budgetInput) <= 0}
            >
              Create Budget
            </Button>
          </CardContent>
        </Card>

        {/* Categories Breakdown */}
        {totalBudget > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {categories.map((category) => {
              const IconComponent = category.icon;
              const usedPercentage = category.allocated > 0 ? (category.spent / category.allocated) * 100 : 0;
            
              return (
                <Card key={category.name} className="card-elevated">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-2 text-sm">
                      <IconComponent className={`h-4 w-4 ${category.color}`} />
                      {category.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-muted-foreground">Allocated</span>
                        <span className="text-sm font-medium">${category.allocated.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-muted-foreground">Spent</span>
                        <span className="text-sm font-medium text-warning">${category.spent.toLocaleString()}</span>
                      </div>
                      <Progress value={usedPercentage} className="h-2" />
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-muted-foreground">Remaining</span>
                        <span className="text-sm font-medium text-success">
                          ${(category.allocated - category.spent).toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="card-elevated">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-sm">
                <Users className="h-4 w-4 text-secondary" />
                Family Budget Sharing
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground mb-3">
                Share budgets with family members
              </p>
              <Button variant="outline" size="sm" className="w-full">
                Invite Member
              </Button>
            </CardContent>
          </Card>

          <Card className="card-elevated">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-sm">
                <Sparkles className="h-4 w-4 text-accent" />
                AI Financial Advisor
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground mb-3">
                Get spiritual financial insights
              </p>
              <Button variant="outline" size="sm" className="w-full">
                Generate Insights
              </Button>
            </CardContent>
          </Card>

          <Card className="card-elevated">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-sm">
                <Calendar className="h-4 w-4 text-primary" />
                Life Calendar
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground mb-3">
                Manage your divine life schedule
              </p>
              <Link to="/calendar">
                <Button variant="outline" size="sm" className="w-full">
                  Open Calendar
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}