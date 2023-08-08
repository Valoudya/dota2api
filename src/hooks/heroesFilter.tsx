export function useHeroesFilter() {

    const filtersArray = [
        {name: 'strength', filterType: item => item.primary_attr === 'str'},
        {name: 'agility', filterType: item => item.primary_attr === 'agi'},
        {name: 'intelligence', filterType: item => item.primary_attr === 'int'},
        {name: 'universal', filterType: item => item.primary_attr === 'all'},
        {name: 'all', filterType: item => item}
    ]

    return { filtersArray }
}