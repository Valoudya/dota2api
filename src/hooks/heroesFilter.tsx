export interface filterInterface {
    primary_attr: string
}

export function useHeroesFilter() {

    const filtersArray = [
        {name: 'strength', filterType: (item:filterInterface) => item.primary_attr === 'str'},
        {name: 'agility', filterType: (item:filterInterface) => item.primary_attr === 'agi'},
        {name: 'intelligence', filterType: (item:filterInterface) => item.primary_attr === 'int'},
        {name: 'universal', filterType: (item:filterInterface) => item.primary_attr === 'all'},
        {name: 'all', filterType: (item:filterInterface) => item}
    ]

    return { filtersArray }
}