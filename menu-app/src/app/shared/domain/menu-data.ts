export interface MenuData {
    id: number;
    url: string;
    name: string;
    description: string;
    category: Category;
}

export const Category = {
    food: 0,
    sweet: 1,
    drink: 2,
} as const;

type Category = typeof Category[keyof typeof Category];
