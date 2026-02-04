
export interface FilterType {
    id: string;
    name: string;
    isPressed?: boolean;
    icons: FilterIcons;
}

export interface FilterComponentProps extends FilterType {
    onPress: () => void;
}

export type FilterIcons = 'Beef' | 'Bird' | 'Fish' | 'Leaf';