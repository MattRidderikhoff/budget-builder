const DEFAULT_CATEGORIES = [
  {
    name: 'Groceries',
    icon: 'cart',
    amount: 1000
  }
];

export class BudgetItem {
  category: Category = undefined;
  amount: number = undefined;
  date: Date = undefined;
  description?: string;
}

export class Category {
  name: string = undefined;
  amount: number = undefined;
  icon: string = undefined;

  constructor(icon?: string) {
    this.icon = icon;
  }
}

export class Session {
  budgetItems: BudgetItem[] = [];
  categories: Category[] = DEFAULT_CATEGORIES;
}
